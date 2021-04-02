import { ModalWindow } from "../components/ModalWindow";
import { ProjectList } from "../components/ProjectList";
import React from "react";
export const Home = () => {
  let [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  return (
    <div className="bg-yellow-100 w-full">
      <h1>HOME</h1>

      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        + New Project
      </button>

      {modalIsOpen && (
        <ModalWindow
          closeModal={() => {
            setModalIsOpen(false);
          }}
          type="project"
        />
      )}

      <main className="flex">
        <ProjectList />
      </main>
    </div>
  );
};
