import supabase, { supabaseBikeImagesBucketUrl } from "./supabase";

export async function getMotorbikes() {
  const { data, error } = await supabase.from("motorbikes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Motorbikes could not be loaded!");
  }

  return data;
}

export async function createMotorbike(newBike) {
  // Unique image name and path
  const imageName = `${newBike.image.name}-${Math.random()}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseBikeImagesBucketUrl}/${imageName}`;

  // 1. Create new motorbike row in the motorbikes table
  const { data, error } = await supabase
    .from("motorbikes")
    .insert([{ ...newBike, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Motorbike could not be created!");
  }

  // 2. Upload image to supabase storage bucket
  const { error: storageError } = await supabase.storage
    .from("bike-images")
    .upload(imageName, newBike.image);

  // Delete db motorbike row if image upload was not successfull
  if (storageError) {
    await supabase.from("motorbikes").delete().eq("id", data.id);
    console.error(error);
    throw new Error(
      "Motorbike image could not be uploaded and Motorbike was not created!"
    );
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
