import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiAuth.js";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (userData) => {
      queryClient.setQueriesData(["user"], userData);
      navigate("/dashboard");
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
