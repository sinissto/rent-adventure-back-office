import TableOperations from "../../ui/table/TableOperations.jsx";
import Filter from "../../ui/table/Filter.jsx";
import SortBy from "../../ui/table/SortBy.jsx";

function BookingTableOperations() {
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
            value: "rentPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "rentPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
