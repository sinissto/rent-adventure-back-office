import Button from "../../ui/Button.jsx";
import Modal from "../../ui/modal/Modal.jsx";
import CreateMotorbikeForm from "./CreateMotorbikeForm.jsx";

function AddMotorbike() {
  return (
    <Modal>
      <Modal.Open opens={"bike-form"}>
        <Button>Add new motorbike</Button>
      </Modal.Open>
      <Modal.Window name={"bike-form"}>
        <CreateMotorbikeForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddMotorbike;
