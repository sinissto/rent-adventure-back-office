import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUser,
    isPending: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: (user) => {
      toast.success("User account successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // queryClient.setQueryData(["user"], user);
    },

    onError: (error) => toast.error(error.message),
  });

  return { updateUser, isUpdating };
}
