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
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="column-name"
            >
              Column Name:
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              id="column-name"
              name="column-name"
              className="border py-2 px-3 text-gray-700 ml-4"
            />

            <button
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                onAdd();
                setModalIsOpen(false);
              }}
            >
              ADD
            </button>
            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
        className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        + New Column
      </button>
    </div>
  );
};
