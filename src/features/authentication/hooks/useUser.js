import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/apiAuth.js";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  if (error) {
    console.log(error);
    throw new Error("User could not be fetched. Try log in again!");
  }

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
