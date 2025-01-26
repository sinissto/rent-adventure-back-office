import TableOperations from "../../ui/table/TableOperations.jsx";
import Filter from "../../ui/table/Filter.jsx";
import { useMotorbikes } from "./hooks/useMotorbikes.js";
import SpinnerMini from "../../ui/loading/SpinnerMini.jsx";

function MotorbikeTableOperations() {
  const { motorbikes, isLoading } = useMotorbikes();
  const brands = motorbikes?.map((bike) => bike.brand.toUpperCase());
  const brandsUnique = brands?.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  if (isLoading) return <SpinnerMini />;
  return (
    <TableOperations>
      <Filter
        filterField={"brand"}
        options={["ALL", ...brandsUnique]}
        isLoading={isLoading}
      />
    </TableOperations>
  );
}

export default MotorbikeTableOperations;
