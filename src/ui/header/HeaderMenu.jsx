import styled from "styled-components";
import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router";
import Logout from "../../features/authentication/Logout.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

const StyledHeaderManu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderManu>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <Logout />
    </StyledHeaderManu>
  );
}

export default HeaderMenu;
