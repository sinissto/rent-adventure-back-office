import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMotorbike } from "../../services/apiMotorbikes.js";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow.jsx";

function CreateMotorbikeForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createMotorbike,
    onSuccess: () => {
      toast.success("New motorbike successfully created!");
      queryClient.invalidateQueries(["motorbikes"]);
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label={"Motorbike brand"} error={errors?.brand?.message}>
        <Input
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow label={"HP"} error={errors?.hp?.message}>
        <Input
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
        <Button disabled={isCreating}>Add motorbike</Button>
      </FormRow>
    </Form>
  );
}

export default CreateMotorbikeForm;
