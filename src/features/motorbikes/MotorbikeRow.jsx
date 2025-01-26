import styled from "styled-components";
import { useDeleteBike } from "./hooks/useDeleteBike.js";

import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import CreateMotorbikeForm from "./CreateMotorbikeForm.jsx";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateBike } from "./hooks/useCreateBike.js";
import Modal from "../../ui/modal/Modal.jsx";
import ConfirmDelete from "./ConfirmDelete.jsx";
import Table from "../../ui/table/Table.jsx";
import Menus from "../../ui/table/Menus.jsx";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  //aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.3) translateX(-7px);
`;

const BikeBrand = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Year = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function MotorbikeRow({ bike }) {
  const {
    id: bikeId,
    brand,
    model,
    price,
    description,
    image,
    hp,
    capacity,
    weight,
    seatHeight,
    equipment,
    year,
  } = bike;

  const { isDeleting, deleteBike } = useDeleteBike();
  const { isCreating, createBike } = useCreateBike();

  function handleDuplicate() {
    createBike({
      model: `Copy of ${model}`,
      brand,
      price,
      description,
      image,
      hp,
      capacity,
      weight,
      seatHeight,
      equipment,
      year,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <BikeBrand>{brand}</BikeBrand>
      <div>{model}</div>
      <Price>{formatCurrency(price)}</Price>
      <Year>{year}</Year>
      <div>
        {/*<Button*/}
        {/*  variation={"secondary"}*/}
        {/*  size={"small"}*/}
        {/*  onClick={handleDuplicate}*/}
        {/*  disabled={isDeleting}*/}
        {/*>*/}
        {/*  <HiSquare2Stack />*/}
        {/*</Button>*/}

        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={bikeId} />

            <Menus.List id={bikeId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens={"edit-bike"}>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens={"delete-bike"}>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name={"edit-bike"}>
              <CreateMotorbikeForm bikeToEdit={bike} />
            </Modal.Window>

            <Modal.Window name={"delete-bike"}>
              <ConfirmDelete
                resourceName={`${brand} ${model}`}
                onConfirm={() => deleteBike(bikeId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default MotorbikeRow;
