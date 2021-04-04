import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../store/projectSlice";
import { Project } from "../types/types";
import { Option } from "../types/types";
import { Member } from "../types/types";
import { HexColorPicker } from "react-colorful";
import MultiSelect from "react-multi-select-component";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import React from "react";

export const ModalAddProject = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [selected, setSelected] = useState<Option[]>([]);
  const [team, setTeam] = useState<Member[]>([]);
  let [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const { members } = useSelector((state: RootState) => state.member);
  const options: Option[] = members.map((member) => {
    return {
      label: `${member.firstname} ${member.lastname}`,
      value: member.id,
    };
  });

  let [showAlert, setShowAlert] = useState<Boolean>(false);

  const onAdd = () => {
    if (name !== "" && color !== "" && team.length !== 0) {
      const newProject: Project = {
        id: "",
        name: name,
        team: team,
        color: color,
      };
      dispatch(addProject(newProject));
      modalIsOpen = false;
    } else {
      setShowAlert(true);
      return;
    }
  };

  return (
    <div className="w-80 h-80">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto">
            <label htmlFor="project-name">Project Name:</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="project-name"
              name="project-name"
              className="border-black border-2"
            />

            {showAlert && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                Please fill out every field!!
              </div>
            )}

            <div className="flex">
              <div>Project Color: </div>
              <div
                style={{ backgroundColor: `${color}` }}
                className="w-10 h-10 border-black border-2"
              ></div>
            </div>

            <HexColorPicker color={color} onChange={setColor} />

            <div>Project-Team:</div>
            <MultiSelect
              options={options}
              value={selected}
              onChange={(optionsArray: Option[]) => {
                setShowAlert(false);
                setSelected(optionsArray);
                let team: Member[] = [];
                optionsArray.forEach((option) => {
                  members.forEach((member: Member) => {
                    if (option.value === member.id) {
                      team.push(member);
                    }
                  });
                });
                setTeam(team);
              }}
              labelledBy="Select"
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
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Close
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
        + New Project
      </button>
    </div>
  );
};