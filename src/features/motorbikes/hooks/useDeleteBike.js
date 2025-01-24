import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMotorbike } from "../../../services/apiMotorbikes.js";
import toast from "react-hot-toast";

export function useDeleteBike() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBike } = useMutation({
    mutationFn: deleteMotorbike,
    onSuccess: () => {
      toast.success("Motorbike successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["motorbikes"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteBike };
}
