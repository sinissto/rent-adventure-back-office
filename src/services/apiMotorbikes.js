import supabase from "./supabase";

export async function getMotorbikes() {
  const { data, error } = await supabase.from("motorbikes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Motorbikes could not be loaded!");
  }

  return data;
}
