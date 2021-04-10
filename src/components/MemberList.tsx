import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";
import { DropDownMenu } from "./DropDownMenu";

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
            <div className="float-right">
              {
                <img
                  id="memberPhoto"
                  src={member.photo}
                  className="max-w-xs max-h-7"
                  alt="img"
                ></img>
              }
            </div>
            <DropDownMenu type="member" item={member} />
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
