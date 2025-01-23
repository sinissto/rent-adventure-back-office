import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow.jsx";
import { createOrEditMotorbike } from "../../services/apiMotorbikes.js";

import { useForm } from "react-hook-form";

function CreateMotorbikeForm({ bikeToEdit = {} }) {
  const { id: editId, ...editValues } = bikeToEdit;
  const isEditingSession = Boolean(editId);

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;

  const { mutate: createBike, isLoading: isCreating } = useMutation({
    mutationFn: createOrEditMotorbike,
    onSuccess: () => {
      toast.success("New motorbike successfully created!");
      queryClient.invalidateQueries(["motorbikes"]);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: editBike, isLoading: isEditing } = useMutation({
    mutationFn: ({ newBikeData, id }) => createOrEditMotorbike(newBikeData, id),
    onSuccess: () => {
      toast.success("Motorbike successfully updated!");
      queryClient.invalidateQueries(["motorbikes"]);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditingSession)
      editBike({ newBikeData: { ...data, image }, id: editId });
    else createBike({ ...data, image: data.image[0] });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button variation="secondary" type="reset">
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
