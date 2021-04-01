import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../store/projectSlice";
import { Project } from "../types/project";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalProjectContent = ({ closeModal, type }: IProps) => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    const newProject: Project = {
      id: "",
      name: name,
      team: team,
      color: color,
      category: category,
    };
    dispatch(addProject(newProject));
  };

  return (
    <div>
      <label htmlFor="project-name">Project Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        id="project-name"
        name="project-name"
        className="border-black border-2"
      />
      <label htmlFor="project-team">Project Team:</label>
      <input
        value={team}
        onChange={(e) => setTeam(e.currentTarget.value)}
        type="text"
        id="project-team"
        name="project-team"
        className="border-black border-2"
      />
      <label htmlFor="project-color">Project Color:</label>
      <input
        value={color}
        onChange={(e) => setColor(e.currentTarget.value)}
        type="text"
        id="project-color"
        name="project-color"
        className="border-black border-2"
      />

      <label htmlFor="project-category">Project Category:</label>
      <select>
        <option
          value="Web Project"
          onChange={(e) => setCategory(e.currentTarget.value)}
          id="project-category"
          className="border-black border-2"
        >
          Web Project
        </option>
        <option
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
          id="project-category"
          className="border-black border-2"
        >
          Game Project
        </option>
        <option
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
          id="project-category"
          className="border-black border-2"
        >
          Computer Graphics Project
        </option>
      </select>

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
