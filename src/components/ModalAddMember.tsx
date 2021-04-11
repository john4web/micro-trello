import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../store/memberSlice";
import { Member } from "../types/types";

export const ModalAddMember = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const dispatch = useDispatch();

  let [showAlert, setShowAlert] = useState<Boolean>(false);
  const onAdd = () => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      job !== "" &&
      skill !== "" &&
      photo !== ""
    ) {
      const newMember: Member = {
        id: "",
        firstname: firstname,
        lastname: lastname,
        job: job,
        skill: skill,
        photo: photo,
      };

      dispatch(addMember(newMember));
      setModalIsOpen(false);
    } else {
      setShowAlert(true);
      return;
    }
  };

  function handleUpload(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function () {
      var base64data = reader.result;
      console.log(base64data);
      var photoURL = String(base64data);
      setPhoto(photoURL);
    };
  }

  return (
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-firstname"
            >
              {" "}
              First Name:
            </label>
            <input
              value={firstname}
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="member-firstname"
              name="member-firstname"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-lastname"
            >
              Last Name:
            </label>
            <input
              value={lastname}
              onChange={(e) => {
                setLastName(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="member-lastname"
              name="member-lastname"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-job"
            >
              Job:
            </label>
            <input
              value={job}
              onChange={(e) => {
                setJob(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="member-job"
              name="member-job"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-skill"
            >
              Skill:
            </label>
            <input
              value={skill}
              onChange={(e) => {
                setSkill(e.currentTarget.value);
                setShowAlert(false);
              }}
              type="text"
              id="member-skill"
              name="member-skill"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-skill"
            >
              Photo:
            </label>
            <input type="file" onChange={handleUpload} />

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
                setModalIsOpen(false);
              }}
            >
              ADD
            </button>
            <button
              className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                setModalIsOpen(false);
              }}
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
        className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        + New Member
      </button>
    </div>
  );
};
