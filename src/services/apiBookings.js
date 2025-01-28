import supabase from "./supabase.js";

export async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, motorbikes(brand, model), riders(fullName, email)");

  if (error) {
    console.log(error);
    throw new Error("Could not fetch bookings!");
  }

  return data;
}
