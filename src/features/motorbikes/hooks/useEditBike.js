import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrEditMotorbike } from "../../../services/apiMotorbikes.js";
import toast from "react-hot-toast";

export function useEditBike() {
  const queryClient = useQueryClient();

  const { mutate: editBike, isLoading: isEditing } = useMutation({
    mutationFn: ({ newBikeData, id }) => createOrEditMotorbike(newBikeData, id),
    onSuccess: () => {
      toast.success("Motorbike successfully updated!");
      queryClient.invalidateQueries(["motorbikes"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editBike };
}
