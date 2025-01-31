import styled from "styled-components";
import stat from "../dashboard/Stat.jsx";
import Tag from "../../ui/Tag.jsx";
import { Flag } from "../bookings/Flag.jsx";
import Button from "../../ui/Button.jsx";
import { Link } from "react-router";
import CheckoutButton from "./CheckoutButton.jsx";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Rider = styled.div`
  font-weight: 500;
`;

function TodayItem({ todayRent }) {
  const { id, status, riders, numDays } = todayRent;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type={"green"}>Picking up</Tag>}
      {status === "checked-in" && <Tag type={"blue"}>Returning</Tag>}

      <Flag src={riders.countryFlag} alt={`Flag of ${riders.nationality}`} />

      <Rider>{riders.fullName}</Rider>

      <div>{numDays} days rent</div>

      {status === "unconfirmed" && (
        <Button
          size={"small"}
          variation={"primary"}
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}
export default TodayItem;
