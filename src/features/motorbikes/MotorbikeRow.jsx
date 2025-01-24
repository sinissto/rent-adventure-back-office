import { useState } from "react";
import styled from "styled-components";
import { useDeleteBike } from "./hooks/useDeleteBike.js";

import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import CreateMotorbikeForm from "./CreateMotorbikeForm.jsx";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateBike } from "./hooks/useCreateBike.js";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  min-height: 10rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

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

  const [showForm, setShowForm] = useState(false);
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
    <>
      <TableRow role={"row"}>
        <Img src={image} />
        <BikeBrand>{brand}</BikeBrand>
        <div>{model}</div>
        <Price>{formatCurrency(price)}</Price>
        <Year>{year}</Year>
        <div>
          <Button
            variation={"secondary"}
            size={"small"}
            onClick={handleDuplicate}
            disabled={isDeleting}
          >
            <HiSquare2Stack />
          </Button>
          <Button
            variation={"secondary"}
            size={"small"}
            onClick={() => setShowForm((show) => !show)}
            disabled={isDeleting}
          >
            <HiPencil />
          </Button>
          <Button
            variation={"danger"}
            size={"small"}
            onClick={() => deleteBike(bikeId)}
            disabled={isDeleting}
          >
            <HiTrash />
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateMotorbikeForm bikeToEdit={bike} />}
    </>
  );
}

export default MotorbikeRow;
