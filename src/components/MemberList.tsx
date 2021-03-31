import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const MemberList = () => {
  const { members } = useSelector((state: RootState) => state.member);

  return (
    <Fragment>
      {members.map((member, index) => {
        return (
          <ul key={index}>
            <li>{member.firstname}</li>
            <li>{member.lastname}</li>
            <li>{member.job}</li>
            <li>{member.skill}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
