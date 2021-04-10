import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addTaskToProjectColumn } from "../store/projectSlice";

import { Column, Member, Task } from "../types/types";
import { Option } from "../types/types";
import { v4 as uuid } from "uuid";

interface IProps {
  boardID: string;
  column: Column;
}

export const ModalAddTask = ({ boardID, column }: IProps) => {
  const [name, setName] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const dispatch = useDispatch();
  const { members } = useSelector((state: RootState) => state.member);
  const [selected, setSelected] = useState<Option[]>([]);
  const [team, setTeam] = useState<Member[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false);

  const options: Option[] = members.map((member) => {
    return {
      label: `${member.firstname} ${member.lastname}`,
      value: member.id,
    };
  });
  let [showAlert, setShowAlert] = useState<Boolean>(false);

  const onAdd = () => {
    if (name !== "" && team.length !== 0 && deadline !== "") {
      const newTask: Task = {
        id: uuid(),
        name: name,
        team: team,
        deadline: deadline,
        projectID: boardID,
        columnID: column.id,
      };
      dispatch(addTaskToProjectColumn(newTask));
      setModalIsOpen(false);
    } else {
      setShowAlert(true);
      return;
    }
  };

  return (
    <div className="">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
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
                setShowAlert(false);
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
                setShowAlert(false);
              }}
              type="date"
              id="task-deadline"
              name="task-deadline"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            {showAlert && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out every field!
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
          setModalIsOpen(true);
        }}
        className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-black"
      >
        + New Task to Column: {column.name}
      </button>
    </div>
  );
};
