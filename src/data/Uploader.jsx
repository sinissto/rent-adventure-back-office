"use client";

import { useState } from "react";
import {
  differenceInDays,
  isFuture,
  isPast,
  isToday,
  parseISO,
} from "date-fns";

import { bookings } from "./data-bookings";
import { bikes } from "./data-bikes";
import { riders } from "./data-riders";
import supabase from "../services/supabase.js";
import Button from "../ui/Button.jsx";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

async function deleteRiders() {
  const { error } = await supabase.from("riders").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBikes() {
  const { error } = await supabase.from("motorbikes").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteReservations() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createRiders() {
  const { error } = await supabase.from("riders").insert(riders);
  if (error) console.log(error.message);
}

async function createBikes() {
  const { error } = await supabase.from("motorbikes").insert(bikes);
  if (error) console.log(error.message);
}

async function createReservations() {
  const { data: ridersIds } = await supabase
    .from("riders")
    .select("id")
    .order("id");
  const allRiderIds = ridersIds.map((rider) => rider?.id);

  const { data: bikesIds } = await supabase
    .from("motorbikes")
    .select("id")
    .order("id");
  const allBikeIds = bikesIds.map((bike) => bike?.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of cabins, as they don't have and ID yet
    const bike = bikes.at(booking.bikeId - 1);
    const numDays = subtractDates(booking.endDate, booking.startDate);
    const rentPrice = numDays * bike.price;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "checked-in";

    return {
      ...booking,
      bikePrice: bike.price,
      numDays,
      rentPrice,
      riderId: allRiderIds.at(booking.riderId - 1),
      bikeId: allBikeIds.at(booking.bikeId - 1),
      status,
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteReservations();
    await deleteRiders();
    await deleteBikes();

    // Bookings need to be created LAST
    await createRiders();
    await createBikes();
    await createReservations();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteReservations();
    await createReservations();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        // marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} isLoading={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
