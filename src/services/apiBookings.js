import supabase from "./supabase.js";
import { PAGE_SIZE } from "../utils/constants.js";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select("*, motorbikes(brand, model), riders(fullName, email)", {
      count: "exact",
    });
  //

  if (filter) query = query.eq(filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Could not fetch bookings!");
  }

  return { data, count };
}
