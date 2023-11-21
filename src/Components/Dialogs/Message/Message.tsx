import React from "react";
import { MyNavLink } from "../../UI/MyNavLink/MyNavLink";

const Message = (props) => {
  // debugger
  return <MyNavLink>{props.message} {props.key} </MyNavLink>;
};

export default Message;
