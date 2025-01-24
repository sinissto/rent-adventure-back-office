import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button.jsx";
import { useSettings } from "./hooks/useSettings.js";
import Spinner from "../../ui/Spinner.jsx";
import { useUpdateSettings } from "./hooks/useUpdateSettings.js";
import { useForm } from "react-hook-form";

function UpdateSettingsForm() {
  const { settings = {}, isLoading, error } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();
  const { minBookingLength, maxBookingLength } = settings;
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    updateSettings(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Minimum days/booking"
        error={errors?.minBookingLength?.message}
      >
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          {...register("minBookingLength", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Maximum days/booking"
        error={errors?.maxBookingLength?.message}
      >
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          {...register("maxBookingLength", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button disabled={isUpdating}>Update</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
