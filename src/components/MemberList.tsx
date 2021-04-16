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
          <div
            key={index}
            className="m-4 p-4 shadow-md border bg-white w-60 text-gray-700"
          >
            <div
              className="float-right bg-black flex justify-center overflow-hidden"
              style={{ width: "28px", height: "28px" }}
            >
              <img
                id="memberPhoto"
                src={member.photo}
                className="max-w-xs max-h-7"
                alt="img"
              ></img>
            </div>
            <div>
              <DropDownMenu type="member" item={member} />
            </div>
            <div>
              {member.firstname} {member.lastname}
            </div>
            <div>Job: {member.job}</div>
            <div>Skill: {member.skill}</div>
          </div>
        );
      })}
    </Fragment>
  );
};
