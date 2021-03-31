import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const MemberList = () => {
  const { members } = useSelector((state: RootState) => state.member);

  return (
    <Fragment>
      {members.map((member, index) => {
        return (
          <ul>
            <li key={index}>{member.firstname}</li>
            <li key={index}>{member.lastname}</li>
            <li key={index}>{member.job}</li>
            <li key={index}>{member.skill}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
