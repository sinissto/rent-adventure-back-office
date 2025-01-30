import Form from "../../ui/form/Form.jsx";
import FormRow from "../../ui/form/FormRow.jsx";
import Input from "../../ui/form/Input.jsx";
import Button from "../../ui/Button.jsx";
import { useForm } from "react-hook-form";
import { useSignup } from "./hooks/useSignup.js";
import SpinnerMini from "../../ui/loading/SpinnerMini.jsx";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isSigningUp } = useSignup();

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required!",
          })}
          disabled={isSigningUp}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter valid email addres",
            },
          })}
          disabled={isSigningUp}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Password needs to be min 8 characters",
            },
          })}
          disabled={isSigningUp}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required!",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
          disabled={isSigningUp}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isSigningUp}>
          Cancel
        </Button>
        <Button disabled={isSigningUp}>
          {isSigningUp ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
