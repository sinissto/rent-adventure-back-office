import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack.js";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import Button from "../../ui/Button.jsx";
import Tag from "../../ui/Tag.jsx";
import ButtonText from "../../ui/ButtonText.jsx";
import BookingDataBox from "./BookingDataBox.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import useBooking from "./hooks/useBooking.js";
import { useNavigate, useParams } from "react-router";
import Spinner from "../../ui/loading/Spinner.jsx";
import Menus from "../../ui/table/Menus.jsx";
import { HiArrowDownOnSquare } from "react-icons/hi2";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading, error } = useBooking();
  // console.log(booking);
  // const status = "checked-in";

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate("/checkin")}
          >
            Check in
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
