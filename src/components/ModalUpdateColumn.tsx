import { useDispatch } from "react-redux";
import { updateColumnFromProject } from "../store/projectSlice";
import { Column } from "../types/types";

import React from "react";

interface IProps {
  column: Column;

  modalIsOpen: boolean;
}

export const ModalUpdateColumn = ({ column, modalIsOpen }: IProps) => {
  const [name, setName] = React.useState<string>(column.name);
  const [showAlert, setShowAlert] = React.useState<Boolean>(false);
  const dispatch = useDispatch();

  const onUpdate = () => {
    if (name !== "") {
      let updateCurrentColumn: Column = {
        id: column.id,
        name: name,
        projectID: column.projectID,
        tasks: column.tasks,
      };
      dispatch(updateColumnFromProject(updateCurrentColumn));
    } else {
      setShowAlert(true);
      return;
    }
  };

  return (
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
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
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                onUpdate();
              }}
            >
              UPDATE
            </button>
            <button className="close-update-modal h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
