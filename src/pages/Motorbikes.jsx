import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MotorbikesTable from "../features/motorbikes/MotorbikesTable.jsx";
import AddMotorbike from "../features/motorbikes/AddMotorbike.jsx";

function Motorbikes() {
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as="h1">All motorbikes</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <MotorbikesTable />

        <AddMotorbike />
      </Row>
    </>
  );
}

export default Motorbikes;
