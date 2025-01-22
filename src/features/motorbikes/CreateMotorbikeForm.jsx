import styled from "styled-components";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMotorbike } from "../../services/apiMotorbikes.js";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateMotorbikeForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="brand">Motorbike brand</Label>
        <Input
          type="text"
          id="brand"
          placeholder={"Brand"}
          {...register("brand")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="model">Motorbike model</Label>
        <Input
          type="text"
          id="model"
          placeholder={"Model"}
          {...register("model")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          id="price"
          placeholder={"Price"}
          {...register("price")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="text"
          id="description"
          defaultValue=""
          placeholder={"Description"}
          {...register("description")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Motorbike photo</Label>
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="hp">HP</Label>
        <Input type="number" id="hp" placeholder={"HP"} {...register("hp")} />
      </FormRow>

      <FormRow>
        <Label htmlFor="capacity">Capacity</Label>
        <Input
          type="number"
          id="capacity"
          placeholder={"Capacity"}
          {...register("capacity")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="weight">Weight</Label>
        <Input
          type="number"
          id="weight"
          placeholder={"Weight"}
          {...register("weight")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="seatHeight">Seat height</Label>
        <Input
          type="text"
          id="seatHeight"
          placeholder={"Seat height"}
          {...register("seatHeight")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="equipment">Equipment</Label>
        <Textarea
          type="text"
          id="equipment"
          defaultValue=""
          placeholder={"Equipment, separated with commas"}
          {...register("equipment")}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="year">Year</Label>
        <Input
          type="number"
          id="year"
          placeholder={"Year"}
          {...register("year")}
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
