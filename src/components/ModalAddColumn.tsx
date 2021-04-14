import { useDispatch } from "react-redux";
import { addColumnToProject } from "../store/projectSlice";
import { Column, Project } from "../types/types";
import { v4 as uuid } from "uuid";
import React from "react";

interface IProps {
  project: Project;
}

export const ModalAddColumn = ({ project }: IProps) => {
  const [name, setName] = React.useState<string>("");
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  let [showAlert, setShowAlert] = React.useState<Boolean>(false);

  const onAdd = () => {
    if (name !== "") {
      let newColumn: Column = {
        id: uuid(),
        name: name,
        projectID: project.id,
      };

      dispatch(addColumnToProject(newColumn));
      setModalIsOpen(false);
    } else {
      setShowAlert(true);
      return;
    }
  };

  function clearContent() {
    setName("");
  }

  return (
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <form className="w-4/6 h-4/6 bg-white opacity-100 p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="column-name"
            >
              Column Name:
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="column-name"
              name="column-name"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            {showAlert && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a name for the column!
              </div>
            )}
            <button
              className="btn-add-column h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                onAdd();
              }}
            >
              ADD
            </button>
            <button
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="btn-close-column h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
            >
              CLOSE
            </button>
          </form>
        </div>
      )}
      <button
        onClick={() => {
          clearContent();
          setModalIsOpen(true);
        }}
        className="btn-column h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        + New Column
      </button>
    </div>
  );
};
