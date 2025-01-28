import supabase from "./supabase.js";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select("*, motorbikes(brand, model), riders(fullName, email)");
  //

  if (filter !== null) query = query.eq(filter.field, filter.value);

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Could not fetch bookings!");
  }

  return data;
}
