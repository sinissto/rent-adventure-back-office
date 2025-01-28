import supabase from "./supabase.js";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select("*, motorbikes(brand, model), riders(fullName, email)");
  //

  if (filter) query = query.eq(filter.field, filter.value);

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Could not fetch bookings!");
  }

  return data;
}
