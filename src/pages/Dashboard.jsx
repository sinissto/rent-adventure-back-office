import Heading from "../ui/Heading.jsx";
import Row from "../ui/Row.jsx";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";

function Dashboard() {
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as={"h1"}>Rent ADV Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
