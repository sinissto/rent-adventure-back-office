import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MotorbikesTable from "../features/motorbikes/MotorbikesTable.jsx";
import AddMotorbike from "../features/motorbikes/AddMotorbike.jsx";
import MotorbikeTableOperations from "../features/motorbikes/MotorbikeTableOperations.jsx";
import { useMotorbikes } from "../features/motorbikes/hooks/useMotorbikes.js";

function Motorbikes() {
  const { motorbikes, isLoading } = useMotorbikes();
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as="h1">All motorbikes</Heading>
        <MotorbikeTableOperations />
      </Row>
      <Row>
        <MotorbikesTable />
        <AddMotorbike />
      </Row>
    </>
  );
}

export default Motorbikes;
