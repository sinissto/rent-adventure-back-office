import Filter from "../../ui/table/Filter.jsx";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={["Last 7 days", "Last 30 days", "Last 90 days"]}
    />
  );
}

export default DashboardFilter;
