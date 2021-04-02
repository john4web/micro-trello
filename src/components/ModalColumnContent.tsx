import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateProject, removeProject } from "../store/projectSlice";
import { Column, Project } from "../types/types";
import { v4 as uuid } from "uuid";

interface IProps {
  closeModal: Function;
  type: String;
  boardID?: String;
}

export const ModalColumnContent = ({ closeModal, type, boardID }: IProps) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { projects } = useSelector((state: RootState) => state.project);

  const onAdd = () => {
    let newColumn: Column = {
      id: uuid(),
      name: name,
    };
    //getting the current project by using the boardID, adding the new column to it and pushing the new project object to the store
    let currentProject: Project = projects.filter(
      (project) => project.id === boardID
    )[0];

    let oldColumns: Column[] = currentProject?.columns || [];
    let newColumns: Column[] = [...oldColumns, newColumn];
    currentProject = { ...currentProject, columns: newColumns };

    dispatch(removeProject(currentProject.id));
    dispatch(updateProject(currentProject));
  };

  return (
    <div>
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
          closeModal();
        }}
      >
        Add
      </button>
    </div>
  );
};
