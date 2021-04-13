import React from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { addTaskToProjectColumn } from "../store/projectSlice";

import { Column, Member, Project, Task } from "../types/types";
import { Option } from "../types/types";
import { v4 as uuid } from "uuid";

interface IProps {
  boardID: string;
  column: Column;
  project: Project;
}

export const ModalAddTask = ({ boardID, column, project }: IProps) => {
  const [name, setName] = React.useState<string>("");
  const [deadline, setDeadline] = React.useState<string>("");
  const [priority, setPriority] = React.useState<string>("");
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState<Option[]>([]);
  const [team, setTeam] = React.useState<Member[]>(project.team);

  const [modalIsOpen, setModalIsOpen] = React.useState<Boolean>(false);

  const options: Option[] = project.team?.map((member) => {
    return {
      label: `${member.firstname} ${member.lastname}`,
      value: member.id,
    };
  });
  let [showAlertName, setShowAlertName] = React.useState<Boolean>(false);
  let [showAlertDeadline, setShowAlertDeadline] = React.useState<Boolean>(
    false
  );
  let [showAlertTeam, setShowAlertTeam] = React.useState<Boolean>(false);
  let [showAlertPriority, setShowAlertPriority] = React.useState<Boolean>(
    false
  );

  const onAdd = () => {
    if (
      name !== "" &&
      team.length !== 0 &&
      deadline !== "" &&
      priority !== ""
    ) {
      const newTask: Task = {
        id: uuid(),
        name: name,
        team: team,
        deadline: deadline,
        priority: priority,
        projectID: boardID,
        columnID: column.id,
      };
      dispatch(addTaskToProjectColumn(newTask));
      setModalIsOpen(false);
    }
    if (name === "") {
      setShowAlertName(true);
    }
    if (team.length === 0) {
      setShowAlertTeam(true);
    }
    if (deadline === "") {
      setShowAlertDeadline(true);
    }
    if (priority === "") {
      setShowAlertPriority(true);
    }
  };

  function clearContent() {
    setName("");
    setDeadline("");
    setPriority("");
    setSelected([]);
    setTeam([]);
  }

  return (
    <div className="">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="task-name"
            >
              {" "}
              Name:
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setShowAlertName(false);
              }}
              type="text"
              id="task-name"
              name="task-name"
              className="border py-2 px-3 text-gray-700 m-4"
            />

            <div className="mb-2 uppercase text-lg text-gray-700">
              Assigned Members:
            </div>
            <MultiSelect
              options={options}
              value={selected}
              onChange={(optionsArray: Option[]) => {
                setShowAlertTeam(false);
                setSelected(optionsArray);
                let team: Member[] = [];
                optionsArray.forEach((option) => {
                  project.team.forEach((member: Member) => {
                    if (option.value === member.id) {
                      team.push(member);
                    }
                  });
                });
                setTeam(team);
              }}
              labelledBy="Select"
            />

            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="task-deadline"
            >
              Deadline:
            </label>
            <input
              value={deadline}
              onChange={(e) => {
                setDeadline(e.currentTarget.value);
                setShowAlertDeadline(false);
              }}
              type="date"
              id="task-deadline"
              name="task-deadline"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="task-priority"
            >
              Priority:
            </label>

            <input
              type="radio"
              id="high"
              name="Priority"
              className="border py-2 px-3 text-gray-700 mr-1 ml-4"
              value="high"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
                setShowAlertPriority(false);
              }}
            />
            <label htmlFor="high">high</label>
            <input
              type="radio"
              id="medium"
              name="Priority"
              className="border py-2 px-3 text-gray-700 mr-1 ml-4"
              value="medium"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
                setShowAlertPriority(false);
              }}
            />
            <label htmlFor="medium">medium</label>
            <input
              type="radio"
              id="low"
              name="Priority"
              className="border py-2 px-3 text-gray-700 mr-1 ml-4"
              value="low"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
                setShowAlertPriority(false);
              }}
            />
            <label htmlFor="low">low</label>

            <br></br>
            {showAlertName && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a name for this task!
              </div>
            )}
            {showAlertTeam && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please add at least on team member to this task!
              </div>
            )}
            {showAlertDeadline && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a deadline!
              </div>
            )}
            {showAlertPriority && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please select a priority for the task!
              </div>
            )}
            <button
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          clearContent();
          setModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-black"
      >
        + New Task to Column: {column.name}
      </button>
    </div>
  );
};
