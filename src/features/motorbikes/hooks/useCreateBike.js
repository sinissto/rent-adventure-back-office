import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrEditMotorbike } from "../../../services/apiMotorbikes.js";
import toast from "react-hot-toast";

export function useCreateBike() {
  const queryClient = useQueryClient();

  const { mutate: createBike, isLoading: isCreating } = useMutation({
    mutationFn: createOrEditMotorbike,
    onSuccess: () => {
      toast.success("New motorbike successfully created!");
      queryClient.invalidateQueries(["motorbikes"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createBike };
}
