import { useQuery } from "@tanstack/react-query";
import { getMotorbikes } from "../../services/apiMotorbikes.js";
import Spinner from "../../ui/Spinner.jsx";

function MotorbikesTable() {
  const {
    isLoading,
    data: motorbikes,
    error,
  } = useQuery({
    queryKey: ["motorbikes"],
    queryFn: getMotorbikes,
  });

  if (isLoading) return <Spinner />;

  return <div>Motorbikes Table</div>;
}

export default MotorbikesTable;
