import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const MemberList = () => {
  const { members } = useSelector((state: RootState) => state.member);

  return (
    <Fragment>
      {members.map((member, index) => {
        return (
          <ul key={index} className=" m-4 border-black border-2">
            <li>{member.firstname}</li>
            <li>{member.lastname}</li>
            <li>{member.job}</li>
            <li>{member.skill}</li>
            <li>
              <img src={URL.createObjectURL(member.photo)} alt="img"></img>
            </li>
          </ul>
        );
      })}
    </Fragment>
  );
};
