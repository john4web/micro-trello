import { ModalWindow } from "../components/ModalWindow";
import { MemberList } from "../components/MemberList";
import React from "react";

export default function App() {
  let [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  return (
    <div className="App">
      <MemberList />

      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        + New Member
      </button>

      {modalIsOpen && (
        <ModalWindow
          closeModal={() => {
            setModalIsOpen(false);
          }}
          type="member"
        />
      )}
    </div>
  );
}
