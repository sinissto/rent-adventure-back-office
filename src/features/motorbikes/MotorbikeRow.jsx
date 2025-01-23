import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers.js";

import Button from "../../ui/Button.jsx";
import { deleteMotorbike } from "../../services/apiMotorbikes.js";
import { useState } from "react";
import CreateMotorbikeForm from "./CreateMotorbikeForm.jsx";

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
  const [showForm, setShowForm] = useState(false);

  const queryClient = useQueryClient();

  const { id: bikeId, brand, model, image, price, year } = bike;

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteMotorbike,
    onSuccess: () => {
      toast.success("Motorbike successfully deleted!");
      queryClient.invalidateQueries({ queryKey: ["motorbikes"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

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
            onClick={() => setShowForm((show) => !show)}
            disabled={isDeleting}
          >
            Edit
          </Button>
          <Button
            variation={"danger"}
            size={"small"}
            onClick={() => mutate(bikeId)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      </TableRow>
      {showForm && <CreateMotorbikeForm bikeToEdit={bike} />}
    </>
  );
}

export default MotorbikeRow;
