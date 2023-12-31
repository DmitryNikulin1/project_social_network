import React from "react";
import styled from "styled-components";

export const AppWrepper = styled.div`
  display: grid;
  grid-template-areas:
    "h h"
    "n c";

  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
  width: 100%;
  margin: 0 auto;
`;

export const AppWrapperContent = styled.div`
  grid-area: c;
  background-color: gray;
`;
