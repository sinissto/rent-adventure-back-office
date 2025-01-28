import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBookings.js";
import { useSearchParams } from "react-router";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByQuery = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByQuery.split("-");
  const sortBy = { field, direction };

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { bookings, isLoading, error };
}
