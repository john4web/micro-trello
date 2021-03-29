import React, { Fragment } from "react";
import { MemberList } from "./MemberList";
import { useDispatch } from "react-redux";
export const ShowMembers = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div>
        <MemberList />
      </div>
    </Fragment>
  );
};
