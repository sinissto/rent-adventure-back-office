import { useForm } from "react-hook-form";
import { useCreateBike } from "./hooks/useCreateBike.js";
import { useEditBike } from "./hooks/useEditBike.js";

import Input from "../../ui/form/Input.jsx";
import Form from "../../ui/form/Form.jsx";
import Button from "../../ui/Button";
import FileInput from "../../ui/form/FileInput.jsx";
import Textarea from "../../ui/form/Textarea.jsx";
import FormRow from "../../ui/form/FormRow.jsx";

function CreateMotorbikeForm({ bikeToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = bikeToEdit;
  const isEditingSession = Boolean(editId);

  const { isCreating, createBike } = useCreateBike();
  const { isEditing, editBike } = useEditBike();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditingSession)
      editBike(
        { newBikeData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        }
      );
    else
      createBike(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset();
            onCloseModal();
          },
        }
      );
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={"Motorbike brand"} error={errors?.brand?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="brand"
          placeholder={"Brand"}
          {...register("brand", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Motorbike model"} error={errors?.model?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="model"
          placeholder={"Model"}
          {...register("model", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Price"} error={errors?.price?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="price"
          placeholder={"Price"}
          {...register("price", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label={"Description for website"}
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isWorking}
          type="text"
          id="description"
          defaultValue=""
          placeholder={"Description"}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Motorbike photo"} error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditingSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"HP"} error={errors?.hp?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="hp"
          placeholder={"HP"}
          {...register("hp", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Capacity"} error={errors?.capacity?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="capacity"
          placeholder={"Capacity"}
          {...register("capacity", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Weight"} error={errors?.weight?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="weight"
          placeholder={"Weight"}
          {...register("weight", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Seat height"} error={errors?.seatHeight?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="seatHeight"
          placeholder={"Seat height"}
          {...register("seatHeight", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Equipment"} error={errors?.equipment?.message}>
        <Textarea
          disabled={isWorking}
          rows={"4"}
          type="text"
          id="equipment"
          defaultValue=""
          placeholder={"Equipment, separated with commas"}
          {...register("equipment", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Year"} error={errors?.year?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="year"
          placeholder={"Year"}
          {...register("year", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditingSession ? "Update" : "Add motorbike"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateMotorbikeForm;
