import React, { useState } from "react";
import { Dialog, DialogsItem, DialogsWrapper } from "./Dialogs.styled";
import DialogItem from "./DialogItem/DialogeItem";
import Message from "./Message/Message";
import { MyInput } from "../UI/MyInput/MyInput";
import { MyButton } from "../UI/MyButton/MyButton";

const Dialogs = (props) => {
  const dialogElement = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  const [messegesElement, setMessegesElement] = useState(
    props.dialogsPage.messages
  );

  const [addMessage, setAddMessage] = useState({ message: " " });

  const sendMessage = () => {
    setMessegesElement([...messegesElement, { ...addMessage, id: Date.now() }]);
    setAddMessage({ message: " " });
  };

  // debugger;
  return (
    <DialogsWrapper>
      <DialogsItem>{dialogElement}</DialogsItem>
      <Dialog>
        {messegesElement.map((m) => (
          <Message message={m.message} />
        ))}
        <div>
          <MyInput
            value={addMessage.message}
            onChange={(e) =>
              setAddMessage({ ...addMessage, message: e.target.value })
            }
            type="text"
          />
        </div>
        <div>
          <MyButton onClick={sendMessage}>Send Message</MyButton>
        </div>
      </Dialog>
    </DialogsWrapper>
  );
};

export default Dialogs;
