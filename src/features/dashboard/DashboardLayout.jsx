import styled from "styled-components";
import { useRecentBookings } from "./hooks/useRecentBookings.js";
import Spinner from "../../ui/loading/Spinner.jsx";
import { useRecentStays } from "./hooks/useRecentStays.js";
import Stats from "./Stats.jsx";
import { useMotorbikes } from "../motorbikes/hooks/useMotorbikes.js";
import SalesChart from "./SalesChart.jsx";
import DurationChart from "./DurationChart.jsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    rentData,
    confirmedRent,
    isLoading: isLoadingRents,
    numDays,
  } = useRecentStays();
  const { motorbikes, isLoading: isLoadingBikes } = useMotorbikes();
  const bikesCount = motorbikes?.length;

  if (isLoadingBookings || isLoadingRents || isLoadingBikes) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedRent={confirmedRent}
        numDays={numDays}
        bikesCount={bikesCount}
      />
      <div>Today's activity</div>
      <DurationChart confirmedRent={confirmedRent} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
