import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColumnToProject } from "../store/projectSlice";
import { Column, Project } from "../types/types";
import { v4 as uuid } from "uuid";
import React from "react";

interface IProps {
  boardID: string;
  project: Project;
}

export const ModalAddColumn = ({ boardID, project }: IProps) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const onAdd = () => {
    let newColumn: Column = {
      id: uuid(),
      name: name,
      projectID: project.id,
    };

    dispatch(addColumnToProject(newColumn));
  };

  return (
    <div>
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto">
            <label htmlFor="column-name">Column Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              id="column-name"
              name="column-name"
              className="border-black border-2"
            />

            <button
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                onAdd();
                setModalIsOpen(false);
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        + New Column
      </button>
    </div>
  );
};