import styled from "styled-components";
import { NavLink } from "react-router";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6.4rem;
  width: auto;
`;

function Logo() {
  return (
    <NavLink to={"/"}>
      <StyledLogo>
        <Img src={"/logo.png"} alt={"Logo"} />
      </StyledLogo>
    </NavLink>
  );
}

export default Logo;
