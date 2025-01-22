import styled from "styled-components";
import Button from "../../ui/Button.jsx";

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
  const { brand, model, image, price, year } = bike;

  return (
    <TableRow role={"row"}>
      <Img src={image} />
      <BikeBrand>{brand}</BikeBrand>
      <div>{model}</div>
      <Price>{price} / day</Price>
      <Year>{year}</Year>
      <Button variation={"danger"} size={"small"}>
        Delete
      </Button>
    </TableRow>
  );
}

export default MotorbikeRow;
