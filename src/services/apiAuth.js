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

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
