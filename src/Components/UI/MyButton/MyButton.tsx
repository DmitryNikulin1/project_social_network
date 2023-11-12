import React from "react";
import { MyBtn } from "./MyButton.styled";

export const MyButton = ({ children, ...props }) => {
  return <MyBtn {...props}>{children}</MyBtn>;
};
