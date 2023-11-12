import React from "react";
import { MyNavLink } from "../../UI/MyNavLink/MyNavLink";

const Message = ({ ...props }) => {
  return <MyNavLink>{props.message}</MyNavLink>;
};

export default Message;
