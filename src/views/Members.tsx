import React, { useState } from "react";

import Modal from "react-modal";
import { Provider } from "react-redux";
import { store } from "../store";
import { ShowMembers } from "../components/ShowMembers";
import { MemberDialog } from "../components/MemberDialog";

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Add Member</button>
      <Provider store={store}>
        <ShowMembers />
      </Provider>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add Member"
      >
        <button onClick={toggleModal}>x</button>

        <Provider store={store}>
          <MemberDialog />
        </Provider>
      </Modal>
    </div>
  );
}
