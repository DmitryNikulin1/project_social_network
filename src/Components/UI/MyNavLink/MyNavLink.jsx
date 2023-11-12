import React from "react";
import { StyledLink } from "./MyNavLink.styled";

export const MyNavLink = ({ children, ...props }) => {
    return (
        <StyledLink {...props}>
            {children}
        </StyledLink>
    )
}
