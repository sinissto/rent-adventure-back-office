import { useState } from "react";
import { useUser } from "./hooks/useUser.js";
import Form from "../../ui/form/Form.jsx";
import FormRow from "../../ui/form/FormRow.jsx";
import Input from "../../ui/form/Input.jsx";
import FileInput from "../../ui/form/FileInput.jsx";
import Button from "../../ui/Button.jsx";
import { useUpdateUser } from "./hooks/useUpdateUser.js";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    if (fullName)
      updateUser(
        { fullName, avatar },
        {
          onSuccess: () => {
            setAvatar(null);
            e.target.reset();
          },
        }
      );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
    e.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={handleCancel}
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
