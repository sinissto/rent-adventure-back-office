import { useQuery } from "@tanstack/react-query";
import { getMotorbikes } from "../../services/apiMotorbikes.js";

function MotorbikesTable() {
  const {
    isLoading,
    data: motorbikes,
    error,
  } = useQuery({
    queryKey: ["motorbikes"],
    queryFn: getMotorbikes,
  });

  return <div>Motorbikes Table</div>;
}

export default MotorbikesTable;
