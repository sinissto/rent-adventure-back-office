import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../../services/apiBookings.js";
import { useParams } from "react-router";

function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  if (error) {
    console.log(error);
    throw new Error(`Booking ${bookingId} could not be loaded!`);
  }

  return { booking, isLoading, error };
}

export default useBooking;
