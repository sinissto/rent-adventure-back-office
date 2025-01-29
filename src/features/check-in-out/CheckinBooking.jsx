import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import { useEffect, useState } from "react";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import ButtonText from "../../ui/ButtonText.jsx";
import BookingDataBox from "../bookings/BookingDataBox.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Button from "../../ui/Button.jsx";
import useBooking from "../bookings/hooks/useBooking.js";
import Spinner from "../../ui/loading/Spinner.jsx";
import Checkbox from "../../ui/Checkbox.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useCheckinI } from "./hooks/useCheckin.js";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [confirmPaid, setConfirmPaid] = useState(false);

  const { booking, isLoading } = useBooking();
  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const { checkin, isCheckingIn } = useCheckinI();

  if (isLoading) return <Spinner />;
  const { id: bookingId, riders, rentPrice } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    checkin(bookingId);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          id={"confirm"}
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {riders.fullName} has paid the total amount of{" "}
          {formatCurrency(rentPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
