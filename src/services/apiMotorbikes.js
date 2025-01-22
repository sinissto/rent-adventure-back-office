import supabase from "./supabase";

export async function getMotorbikes() {
  const { data, error } = await supabase.from("motorbikes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Motorbikes could not be loaded!");
  }

  return data;
}

export async function createMotorbike(newBike) {
  const { data, error } = await supabase
    .from("motorbikes")
    .insert([newBike])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Motorbike could not be created!");
  }

  return data;
}

export async function deleteMotorbike(id) {
  const { error } = await supabase.from("motorbikes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Motorbike could not be deleted!");
  }
}
