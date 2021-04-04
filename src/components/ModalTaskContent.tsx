import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

import { Column, Member } from "../types/types";
import { Option } from "../types/types";

interface IProps {
  boardID?: String;
  column: Column;
}

export const ModalTaskContent = ({ boardID, column }: IProps) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
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

  const onAdd = () => {
    // const newTask: Task = {
    //   id: "",
    //   name: name,
    //   team: team,
    //   deadline: deadline,
    //   projectID: boardID,
    //   columnID: "",
    // };
    // dispatch(addTaskToProjectColumn(newTask));
  };

  return (
    <div>
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto">
            <label htmlFor="task-name"> Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              id="task-name"
              name="task-name"
              className="border-black border-2"
            />

            <div>Assigned Members:</div>
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

            <label htmlFor="task-deadline">Deadline:</label>
            <input
              value={deadline}
              onChange={(e) => setDeadline(e.currentTarget.value)}
              type="text"
              id="task-deadline"
              name="task-deadline"
              className="border-black border-2"
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
              onClick={() => {
                setModalIsOpen(false);
              }}
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
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
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        + New Task to Column: {column.name}
      </button>
    </div>
  );
};
