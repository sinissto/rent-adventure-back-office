import { useQuery } from "@tanstack/react-query";
import { getRentsTodayActivity } from "../../../services/apiBookings.js";

export function useTodayActivity() {
  const { data: todayRents, isPending: isLoading } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getRentsTodayActivity,
  });

  return { todayRents, isLoading };
}
