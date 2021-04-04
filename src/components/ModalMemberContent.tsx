import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../store/memberSlice";
import { Member } from "../types/types";

export const ModalMemberContent = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    const newMember: Member = {
      id: "",
      firstname: firstname,
      lastname: lastname,
      job: job,
      skill: skill,
    };

    dispatch(addMember(newMember));
  };

  return (
    <div>
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto">
            <label htmlFor="member-firstname"> First Name:</label>
            <input
              value={firstname}
              onChange={(e) => setFirstName(e.currentTarget.value)}
              type="text"
              id="member-firstname"
              name="member-firstname"
              className="border-black border-2"
            />
            <label htmlFor="member-lastname">Last Name:</label>
            <input
              value={lastname}
              onChange={(e) => setLastName(e.currentTarget.value)}
              type="text"
              id="member-lastname"
              name="member-lastname"
              className="border-black border-2"
            />
            <label htmlFor="member-job">Job:</label>
            <input
              value={job}
              onChange={(e) => setJob(e.currentTarget.value)}
              type="text"
              id="member-job"
              name="member-job"
              className="border-black border-2"
            />

            <label htmlFor="member-skill">Skill:</label>
            <input
              value={skill}
              onChange={(e) => setSkill(e.currentTarget.value)}
              type="text"
              id="member-skill"
              name="member-skill"
              className="border-black border-2"
            />

            <button
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              Close
            </button>

            <button
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
              onClick={() => {
                onAdd();
                setModalIsOpen(false);
              }}
            >
              Add
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
        + New Member
      </button>
    </div>
  );
};
