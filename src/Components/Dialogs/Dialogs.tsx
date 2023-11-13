import React from "react";
import { Dialog, DialogsItem, DialogsWrapper } from "./Dialogs.styled";
import DialogItem from "./DialogItem/DialogeItem";
import Message from "./Message/Message";

const Dialogs = ({ ...props }) => {
  const dialogElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const messegesElement = props.dialogsPage.massages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <DialogsWrapper>
      <DialogsItem>
        <div>{dialogElement}</div>
      </DialogsItem>
      <Dialog>{messegesElement}</Dialog>
    </DialogsWrapper>
  );
};

export default Dialogs;
