import TableOperations from "../../ui/table/TableOperations.jsx";
import Filter from "../../ui/table/Filter.jsx";
import { useMotorbikes } from "./hooks/useMotorbikes.js";
import SpinnerMini from "../../ui/loading/SpinnerMini.jsx";
import SortBy from "../../ui/table/SortBy.jsx";

function MotorbikeTableOperations() {
  const { motorbikes, isLoading } = useMotorbikes();
  const brands = motorbikes?.map((bike) => bike.brand.toUpperCase());
  const brandsUnique = brands?.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const sortBy = [
    { value: "brand-asc", label: "Sort by brand (A-Z)" },
    { value: "brand-desc", label: "Sort by brand (Z-A)" },
    { value: "price-asc", label: "Sort by price (lowest first)" },
    { value: "price-desc", label: "Sort by price (highest first)" },
  ];

  if (isLoading) return <SpinnerMini />;
  return (
    <TableOperations>
      <Filter
        filterField={"brand"}
        options={["ALL", ...brandsUnique]}
        isLoading={isLoading}
      />

      <SortBy options={sortBy} />
    </TableOperations>
  );
}

export default MotorbikeTableOperations;
