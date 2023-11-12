import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: grid;
  text-decoration: none;
  color: white;

  &.active {
    color: red;
  }
`;
