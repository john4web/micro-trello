import { useDispatch } from "react-redux";
import { updateColumnFromProject } from "../store/projectSlice";
import { Column } from "../types/types";

import React from "react";

interface IProps {
  column: Column;

  modalIsOpen: boolean;
}

export const ModalUdateColumn = ({ column, modalIsOpen }: IProps) => {
  const [name, setName] = React.useState<string>(column.name);
  const dispatch = useDispatch();

  const onUpdate = () => {
    let updateCurrentColumn: Column = {
      id: column.id,
      name: name,
      projectID: column.projectID,
      tasks: column.tasks,
    };

    dispatch(updateColumnFromProject(updateCurrentColumn));
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
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              id="column-name"
              name="column-name"
              className="border py-2 px-3 text-gray-700 ml-4"
            />

            <button
              className="btn-update-column h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
