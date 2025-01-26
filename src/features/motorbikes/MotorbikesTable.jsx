import { useMotorbikes } from "./hooks/useMotorbikes.js";

import Spinner from "../../ui/loading/Spinner.jsx";
import MotorbikeRow from "./MotorbikeRow.jsx";
import Table from "../../ui/table/Table.jsx";
import Menus from "../../ui/table/Menus.jsx";
import { useSearchParams } from "react-router";

function MotorbikesTable() {
  const { motorbikes, isLoading } = useMotorbikes();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("brand") || "all";

  let filteredBikes;
  if (filterValue === "all") {
    filteredBikes = motorbikes;
  } else {
    filteredBikes = motorbikes.filter(
      (bike) => bike.brand.toLowerCase() === filterValue
    );
  }

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Brand</div>
          <div>Model</div>
          <div>Price</div>
          <div>Year</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredBikes}
          render={(bike) => <MotorbikeRow key={bike.id} bike={bike} />}
        />
      </Table>
    </Menus>
  );
}

export default MotorbikesTable;
