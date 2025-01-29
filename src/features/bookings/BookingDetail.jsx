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
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import { useCheckout } from "../check-in-out/hooks/useCheckout.js";
import Modal from "../../ui/modal/Modal.jsx";
import ConfirmDelete from "../motorbikes/ConfirmDelete.jsx";
import { useDeleteBooking } from "./hooks/useDeleteBooking.js";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading, error } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

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
        <Modal>
          {status === "checked-out" && (
            <Modal.Open opens={"deleteBooking"}>
              <Button variation={"danger"} icon={<HiTrash />}>
                Delete booking
              </Button>
            </Modal.Open>
          )}
          <Modal.Window name={"deleteBooking"}>
            <ConfirmDelete
              resourceName={"booking"}
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        {status === "unconfirmed" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
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
