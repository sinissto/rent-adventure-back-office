import TableOperations from "../../ui/table/TableOperations.jsx";
import Filter from "../../ui/table/Filter.jsx";
import SortBy from "../../ui/table/SortBy.jsx";
import { useBookings } from "./hooks/useBookings.js";
import SpinnerMini from "../../ui/loading/SpinnerMini.jsx";

function BookingTableOperations() {
  const { bookings, isLoading } = useBookings();
  const status = bookings?.map((booking) => booking.status);
  const statusUnique = status?.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  if (isLoading) return <SpinnerMini />;

  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={["ALL", "unconfirmed", "checked-in", "checked-out"]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
