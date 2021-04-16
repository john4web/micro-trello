import React from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "../store/memberSlice";
import { updateMemberInAllProjects } from "../store/projectSlice";
import { Member } from "../types/types";

interface IProps {
  member: Member;
  modalIsOpen: boolean;
}

export const ModalUpdateMember = ({ member, modalIsOpen }: IProps) => {
  const [firstname, setFirstName] = React.useState<string>(member.firstname);
  const [lastname, setLastName] = React.useState<string>(member.lastname);
  const [job, setJob] = React.useState<string>(member.job);
  const [skill, setSkill] = React.useState<string>(member.skill);
  const [photo, setPhoto] = React.useState<string>(member.photo);
  const dispatch = useDispatch();

  const [showAlertFirstName, setShowAlertFirstName] = React.useState<Boolean>(
    false
  );
  const [showAlertLastName, setShowAlertLastName] = React.useState<Boolean>(
    false
  );
  const [showAlertJob, setShowAlertJob] = React.useState<Boolean>(false);
  const [showAlertSkill, setShowAlertSkill] = React.useState<Boolean>(false);

  const onUpdate = () => {
    if (firstname !== "" && lastname !== "" && job !== "" && skill !== "") {
      const updateCurrentMember: Member = {
        id: member.id,
        firstname: firstname,
        lastname: lastname,
        job: job,
        skill: skill,
        photo: photo,
      };
      dispatch(updateMember(updateCurrentMember));
      dispatch(updateMemberInAllProjects(updateCurrentMember));
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
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = function (e) {
      let base64data = reader.result;
      let photoURL = String(base64data);
      let img = new Image();

      img.onload = function () {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d")!;
        var MAX_WIDTH = 400;
        var MAX_HEIGHT = 400;
        var width = img.width;
        var height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        let photoURL = canvas.toDataURL(event.target.files[0].type);
        setPhoto(photoURL);
      };
      img.src = photoURL;
    };
  }

  return (
    <div>
      {modalIsOpen && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto p-4">
            <label
              className="mb-2 uppercase text-lg text-gray-700"
              htmlFor="member-firstname"
            >
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
