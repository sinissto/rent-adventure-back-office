import styled from "styled-components";
import { NavLink } from "react-router";
import { useDarkMode } from "../../context/DarkModeContext.jsx";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6.4rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo_light.png" : "logo.png";

  return (
    <NavLink to={"/"}>
      <StyledLogo>
        <Img src={src} alt={"Logo"} />
      </StyledLogo>
    </NavLink>
  );
}

export default Logo;
