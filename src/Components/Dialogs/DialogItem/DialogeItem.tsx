import React from "react";
import { MyNavLink } from "../../UI/MyNavLink/MyNavLink";

const DialogItem = ({ ...props }) => {
  let path = "/dialog/*" + props.id;
  return <MyNavLink to={path}>{props.name}</MyNavLink>;
};

export default DialogItem;
