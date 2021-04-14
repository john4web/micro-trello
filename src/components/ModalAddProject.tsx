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
  const [name, setName] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("#ff0000");
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

  let [showAlertName, setShowAlertName] = useState<Boolean>(false);
  let [showAlertTeam, setShowAlertTeam] = useState<Boolean>(false);

  const onAdd = () => {
    if (name !== "" && color !== "" && team.length !== 0) {
      const newProject: Project = {
        id: "",
        name: name,
        team: team,
        color: color,
      };
      dispatch(addProject(newProject));
      setModalIsOpen(false);
    }
    if (name === "") {
      setShowAlertName(true);
    }
    if (team.length === 0) {
      setShowAlertTeam(true);
    }
  };

  function clearContent() {
    setName("");
    setColor("#ff0000");
    setSelected([]);
    setTeam([]);
  }

  return (
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <form className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="project-name"
            >
              Project Name:
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setShowAlertName(false);
              }}
              type="text"
              id="project-name"
              name="project-name"
              className="border py-2 px-3 text-gray-700 m-4"
            />

            <div className="colorPicker flex">
              <div className="mb-2 uppercase  text-lg text-gray-700">
                Project Color:{" "}
              </div>
              <div
                style={{ backgroundColor: `${color}` }}
                className="w-10 h-10 border-black border-2 m-4 mt-0"
              ></div>
              <HexColorPicker
                color={color}
                onChange={setColor}
                style={{ width: "150px", height: "150px" }}
              />
            </div>

            <div className="mb-2 uppercase text-lg text-gray-700">
              Project-Team:
            </div>
            <MultiSelect
              options={options}
              value={selected}
              onChange={(optionsArray: Option[]) => {
                setShowAlertTeam(false);
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
            {showAlertName && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a name for this project!
              </div>
            )}
            {showAlertTeam && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please assign at least one team member to this project!
              </div>
            )}
            <button
              className="btn-add-project h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                onAdd();
              }}
            >
              ADD
            </button>
            <button
              className="btn-close-project h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                setModalIsOpen(false);
              }}
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
        className="btn-project h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        + New Project
      </button>
    </div>
  );
};
