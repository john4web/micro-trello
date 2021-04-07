import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const MemberList = () => {
  const { members } = useSelector((state: RootState) => state.member);

  return (
    <Fragment>
      {members.map((member, index) => {
        return (
          <ul
            key={index}
            className="m-4 p-4 shadow-md border bg-white w-60 text-gray-700"
          >
            <li>
              {member.firstname} {member.lastname}
            </li>
            <li>Job: {member.job}</li>
            <li>Skill: {member.skill}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
