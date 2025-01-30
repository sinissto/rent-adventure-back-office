import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    mutate: signup,
    isPending: isSigningUp,
    error,
  } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },

    onError: () => {},
  });

  return { signup, isSigningUp };
}
