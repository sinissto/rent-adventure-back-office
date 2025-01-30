import { useUser } from "../features/authentication/hooks/useUser.js";
import Spinner from "./loading/Spinner.jsx";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  // 3. If there is NO authenticated user redirect to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, redirect to app
  if (isAuthenticated) return <>{children}</>;
}

export default ProtectedRoute;
