import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MotorbikesTable from "../features/motorbikes/MotorbikesTable.jsx";

function Motorbikes() {
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as="h1">All motorbikes</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <MotorbikesTable />
      </Row>
    </>
  );
}

export default Motorbikes;
