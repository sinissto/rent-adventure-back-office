import { useQuery } from "@tanstack/react-query";
import { getMotorbikes } from "../../../services/apiMotorbikes.js";

export function useMotorbikes() {
  const {
    isLoading,
    data: motorbikes,
    error,
  } = useQuery({
    queryKey: ["motorbikes"],
    queryFn: getMotorbikes,
  });

  return { motorbikes, isLoading, error };
}
