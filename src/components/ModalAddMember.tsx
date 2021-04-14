import React from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../store/memberSlice";
import { Member } from "../types/types";

export const ModalAddMember = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [firstname, setFirstName] = React.useState<string>("");
  const [lastname, setLastName] = React.useState<string>("");
  const [job, setJob] = React.useState<string>("");
  const [skill, setSkill] = React.useState<string>("");
  const [photo, setPhoto] = React.useState<string>("");

  const dispatch = useDispatch();

  let [showAlertFirstName, setShowAlertFirstName] = React.useState<Boolean>(
    false
  );
  let [showAlertLastName, setShowAlertLastName] = React.useState<Boolean>(
    false
  );
  let [showAlertJob, setShowAlertJob] = React.useState<Boolean>(false);
  let [showAlertSkill, setShowAlertSkill] = React.useState<Boolean>(false);

  const onAdd = () => {
    if (firstname !== "" && lastname !== "" && job !== "" && skill !== "") {
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
    }
    if (firstname === "") {
      setShowAlertFirstName(true);
    }
    if (lastname === "") {
      setShowAlertLastName(true);
    }
    if (job === "") {
      setShowAlertJob(true);
    }
    if (skill === "") {
      setShowAlertSkill(true);
    }
  };

  function handleUploadResize(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = function (e) {
      var base64data = reader.result;
      var photoURL = String(base64data);
      var img = new Image();

      img.onload = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d")!;
        canvas.width = 400;
        canvas.height = 400;
        ctx.drawImage(img, 0, 0);
        var photoURL = canvas.toDataURL(event.target.files[0].type);
        setPhoto(photoURL);
      };
      img.src = photoURL;
    };
  }

  function clearContent() {
    setFirstName("");
    setLastName("");
    setJob("");
    setSkill("");
    setPhoto("");
  }

  return (
    <div className="w-80 float-right">
      {modalIsOpen && (
        <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center z-10">
          <div className="form-member w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
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
                setShowAlertFirstName(false);
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
                setShowAlertLastName(false);
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
                setShowAlertJob(false);
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
                setShowAlertSkill(false);
              }}
              type="text"
              id="member-skill"
              name="member-skill"
              className="border py-2 px-3 text-gray-700 m-4"
            />
            <br></br>
            <label
              className="mb-2 uppercase text-lg text-gray-700 mr-4"
              htmlFor="member-skill"
            >
              Photo:
            </label>
            <input
              type="file"
              onChange={(e) => {
                handleUploadResize(e);
              }}
            />

            <br></br>
            {showAlertFirstName && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a first name!
              </div>
            )}
            {showAlertLastName && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out a last name!
              </div>
            )}
            {showAlertJob && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out your job!
              </div>
            )}
            {showAlertSkill && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-4 mb-4 rounded relative">
                Please fill out one or more skills!
              </div>
            )}

            <button
              className="btn-add-member h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
              onClick={() => {
                onAdd();
              }}
            >
              ADD
            </button>
            <button
              className="btn-close-member h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
          clearContent();
          setModalIsOpen(true);
        }}
        className="btn-member h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        + New Member
      </button>
    </div>
  );
};
