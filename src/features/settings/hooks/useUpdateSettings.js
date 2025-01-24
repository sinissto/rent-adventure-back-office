import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../../services/apiSettings.js";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      toast.success("Settings successfully updated!");
      queryClient.invalidateQueries(["settings"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSettings, isUpdating };
}
