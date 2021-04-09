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
          <div className=" m-4 border-black border-2">
            <DropDownMenu type="member" item={member} />
            <ul key={index}>
              <li>{member.firstname}</li>
              <li>{member.lastname}</li>
              <li>{member.job}</li>
              <li>{member.skill}</li>
            </ul>
          </div>
        );
      })}
    </Fragment>
  );
};
