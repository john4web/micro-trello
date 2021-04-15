import React from "react";
import { useDispatch } from "react-redux";
import { updateMember } from "../store/memberSlice";
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

  const onUpdate = () => {
    const updateCurrentMember: Member = {
      id: member.id,
      firstname: firstname,
      lastname: lastname,
      job: job,
      skill: skill,
      photo: photo,
    };
    dispatch(updateMember(updateCurrentMember));
  };

  function handleUpload(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = function () {
      var base64data = reader.result;
      var photoURL = String(base64data);
      setPhoto(photoURL);
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
              onChange={(e) => setFirstName(e.currentTarget.value)}
              type="text"
              id="member-firstname"
              name="member-firstname"
              className="border py-2 px-3 text-gray-700 ml-4"
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
              onChange={(e) => setLastName(e.currentTarget.value)}
              type="text"
              id="member-lastname"
              name="member-lastname"
              className="border py-2 px-3 text-gray-700 ml-4"
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
              onChange={(e) => setJob(e.currentTarget.value)}
              type="text"
              id="member-job"
              name="member-job"
              className="border py-2 px-3 text-gray-700 ml-4"
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
              onChange={(e) => setSkill(e.currentTarget.value)}
              type="text"
              id="member-skill"
              name="member-skill"
              className="border py-2 px-3 text-gray-700 ml-4"
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
            <button
              className="btn-update-member h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700"
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
