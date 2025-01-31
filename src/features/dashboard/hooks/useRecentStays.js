import { useSearchParams } from "react-router";
import { subDays } from "date-fns";
import {
  getBookingsAfterDate,
  getStaysAfterDate,
} from "../../../services/apiBookings.js";
import { useQuery } from "@tanstack/react-query";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const days = searchParams.get("last").split(" ").at(1);

  const numDays = !searchParams.get("last") ? 7 : Number(days);

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, confirmedStays, isLoading };
}
