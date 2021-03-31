import { Link } from "react-router-dom";
import { ModalWindow } from "../components/ModalWindow";
import React from "react";
export const Home = () => {
  let [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const projectData = [
    {
      id: "1",
      name: " Projekt1",
      team: [{}, {}, {}],
      color: "#0000ff",
    },
    {
      id: "2",
      name: " Projekt2",
      team: [{}, {}, {}],
      color: "#00ff00",
    },
    {
      id: "3",
      name: " Projekt3",
      team: [{}, {}, {}],
      color: "#ff0000",
    },
  ];

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
        <ul>
          {projectData.map((project) => {
            return (
              <li
                key={project.id}
                className="bg-green-200 m-4 border-black border-2"
              >
                <div className="block px-9 py-10">
                  <Link
                    to={{
                      pathname: `/board/${project.id}`,
                      state: project.name,
                    }}
                  >
                    {project.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
