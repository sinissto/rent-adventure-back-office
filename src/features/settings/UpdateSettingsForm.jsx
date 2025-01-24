import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button.jsx";
import { useSettings } from "./hooks/useSettings.js";
import Spinner from "../../ui/Spinner.jsx";

function UpdateSettingsForm() {
  const { settings = {}, isLoading, error } = useSettings();
  const { minBookingLength, maxBookingLength } = settings;

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum days/booking">
        <Input type="number" id="min-days" defaultValue={minBookingLength} />
      </FormRow>
      <FormRow label="Maximum days/booking">
        <Input type="number" id="max-days" defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Update</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
