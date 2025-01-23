import supabase, { supabaseBikeImagesBucketUrl, supabaseUrl } from "./supabase";

export async function getMotorbikes() {
  const { data, error } = await supabase.from("motorbikes").select("*");

  if (error) {
    console.error(error);
    throw new Error("Motorbikes could not be loaded!");
  }

  return data;
}

export async function createOrEditMotorbike(newBike, id) {
  const hasImagePath = newBike.image?.startsWith?.(supabaseUrl);

  // Unique image name and path
  const imageName = `${newBike.image.name}-${Math.random()}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newBike.image
    : `${supabaseBikeImagesBucketUrl}/${imageName}`;

  // Create new motorbike row in the motorbikes table
  let query = supabase.from("motorbikes");
  if (!id) {
    query = query.insert([{ ...newBike, image: imagePath }]);
  }

  // Edit motorbike data
  if (id) {
    query = query.update({ ...newBike, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

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
