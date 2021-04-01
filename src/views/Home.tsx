import { ModalWindow } from "../components/ModalWindow";
import { ProjectList } from "../components/ProjectList";
import React from "react";
export const Home = () => {
  let [categoryModalIsOpen, setCategoryModalIsOpen] = React.useState<boolean>(
    false
  );

  return (
    <div className="bg-yellow-100 w-full">
      <h1>HOME</h1>

      <button
        onClick={() => {
          setCategoryModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        + New Category
      </button>

      {categoryModalIsOpen && (
        <ModalWindow
          closeModal={() => {
            setCategoryModalIsOpen(false);
          }}
          type="category"
        />
      )}

      <main className="flex">
        <ProjectList />
      </main>
    </div>
  );
};
