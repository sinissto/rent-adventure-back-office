import Heading from "../ui/Heading";
import Row from "../ui/Row";
import MotorbikesTable from "../features/motorbikes/MotorbikesTable.jsx";
import Button from "../ui/Button.jsx";
import { useState } from "react";
import CreateMotorbikeForm from "../features/motorbikes/CreateMotorbikeForm.jsx";

function Motorbikes() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as="h1">All motorbikes</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <MotorbikesTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new motorbike
        </Button>
        {showForm && <CreateMotorbikeForm />}
      </Row>
    </>
  );
}

export default Motorbikes;
