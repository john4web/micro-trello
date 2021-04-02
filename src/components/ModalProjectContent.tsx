import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../store/projectSlice";
import { Project } from "../types/types";
import { HexColorPicker } from "react-colorful";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalProjectContent = ({ closeModal, type }: IProps) => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [color, setColor] = useState("#ff0000");
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

      <div className="flex">
        <div>Project Color: </div>
        <div
          style={{ backgroundColor: `${color}` }}
          className="w-10 h-10 border-black border-2"
        ></div>
      </div>

      <HexColorPicker color={color} onChange={setColor} />

      <label htmlFor="project-category">Project Category:</label>
      <select
        id="project-category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option
          value="No Category"
          id="project-no-category"
          className="border-black border-2"
        >
          --- Select Value ---
        </option>
        <option
          value="Web Project"
          id="project-category-web"
          className="border-black border-2"
        >
          Web Project
        </option>
        <option
          value="Game Project"
          id="project-category-game"
          className="border-black border-2"
        >
          Game Project
        </option>
        <option
          value="Computer Graphics Project"
          id="project-category-cg"
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
