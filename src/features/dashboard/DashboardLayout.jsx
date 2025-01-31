import styled from "styled-components";
import { useRecentBookings } from "./hooks/useRecentBookings.js";
import Spinner from "../../ui/loading/Spinner.jsx";
import { useRecentStays } from "./hooks/useRecentStays.js";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statiscics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Cart sales str</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
