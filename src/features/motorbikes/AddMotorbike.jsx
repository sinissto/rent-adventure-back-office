import Button from "../../ui/Button.jsx";
import { useState } from "react";
import Modal from "../../ui/modal/Modal.jsx";
import CreateMotorbikeForm from "./CreateMotorbikeForm.jsx";

function AddMotorbike() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new motorbike
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((isOpen) => !isOpen)}>
          <CreateMotorbikeForm
            onCloseModal={() => setIsOpenModal((isOpen) => !isOpen)}
          />
        </Modal>
      )}
    </div>
  );
}

export default AddMotorbike;
