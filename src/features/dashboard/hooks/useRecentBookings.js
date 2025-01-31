import { useSearchParams } from "react-router";
import { subDays } from "date-fns";
import { getBookingsAfterDate } from "../../../services/apiBookings.js";
import { useQuery } from "@tanstack/react-query";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const days = searchParams.get("last")?.split(" ")?.at(1) ?? 7;

  const numDays = !searchParams.get("last") ? 7 : Number(days);

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading };
}
