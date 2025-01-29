import { useState } from "react";
import Form from "../../ui/form/Form.jsx";
import Input from "../../ui/form/Input.jsx";
import Button from "../../ui/Button.jsx";
import FormRowVertical from "../../ui/form/FormRowVertical.jsx";
import { useLogin } from "./hooks/useLogin.js";
import Spinner from "../../ui/loading/Spinner.jsx";
import SpinnerMini from "../../ui/loading/SpinnerMini.jsx";

function LoginForm() {
  const [email, setEmail] = useState("demo@user.com");
  const [password, setPassword] = useState("pass123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    //todo login fn below from react query
    login({ email, password });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Log in"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
