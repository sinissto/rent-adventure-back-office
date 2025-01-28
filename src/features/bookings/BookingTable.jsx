import Menus from "../../ui/table/Menus.jsx";
import Table from "../../ui/table/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import { useBookings } from "./hooks/useBookings.js";
import Empty from "../../ui/Empty.jsx";
import Spinner from "../../ui/loading/Spinner.jsx";

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings?.length) return <Empty resourceName={"bookings"} />;

  return (
    <Menus>
      <Table columns="1.2fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Motorbike</div>
          <div>Rider</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
