import React from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch } from "react-redux";
import { updateTaskFromProjectColumn } from "../store/projectSlice";

import { Member, Task } from "../types/types";
import { Option } from "../types/types";

interface IProps {
  task: Task;
  project: any;
  modalIsOpen: boolean;
}

export const ModalUpdateTask = ({ task, project, modalIsOpen }: IProps) => {
  const [name, setName] = React.useState<string>(task.name);
  const [deadline, setDeadline] = React.useState<string>(task.deadline);
  const [priority, setPriority] = React.useState<string>(task.priority);
  const [team, setTeam] = React.useState<Member[]>(project.team);
  const dispatch = useDispatch();

  const options: Option[] = project.team?.map((member: Member) => {
    return {
      label: `${member.firstname} ${member.lastname}`,
      value: member.id,
    };
  });

  //sets preselestion of the members
  function setPreselection() {
    let preSelection: Option[] = [];
    options.map((option) => {
      task.team.map((member: Member) => {
        if (option.value === member.id) {
          preSelection.push(option);
        }
        return true;
      });
      return true;
    });
    return preSelection;
  }

  const [selected, setSelected] = React.useState<Option[]>(setPreselection());

  const [showAlertName, setShowAlertName] = React.useState<Boolean>(false);
  const [showAlertDeadline, setShowAlertDeadline] = React.useState<Boolean>(
    false
  );
  const [showAlertTeam, setShowAlertTeam] = React.useState<Boolean>(false);

  const onUpdate = () => {
    if (
      name !== "" &&
      team.length !== 0 &&
      deadline !== "" &&
      priority !== ""
    ) {
      const updateCurrentTask: Task = {
        id: task.id,
        name: name,
        team: team,
        deadline: deadline,
        priority: priority,
        projectID: task.projectID,
        columnID: task.columnID,
      };
      dispatch(updateTaskFromProjectColumn(updateCurrentTask));
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
  };

  return (
    <div id={"modal-" + task.id}>
      {modalIsOpen && (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
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
                  project.team?.forEach((member: Member) => {
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
              className="border py-2 px-3 text-gray-700 ml-4"
              defaultChecked={"high" === task.priority}
              value="high"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
              }}
            />
            <label htmlFor="high"> high</label>
            <input
              type="radio"
              id="medium"
              name="Priority"
              className="border py-2 px-3 text-gray-700 ml-4"
              defaultChecked={"medium" === task.priority}
              value="medium"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
              }}
            />
            <label htmlFor="medium"> medium</label>
            <input
              type="radio"
              id="low"
              name="Priority"
              className="border py-2 px-3 text-gray-700 ml-4"
              defaultChecked={"low" === task.priority}
              value="low"
              onChange={(e) => {
                setPriority(e.currentTarget.value);
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
