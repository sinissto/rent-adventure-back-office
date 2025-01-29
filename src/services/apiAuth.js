import supabase from "./supabase.js";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    // TODO Hardcoded username and password for demo login
    // email: "demo@user.com",
    // password: "pass123",
    email,
    password,
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}
