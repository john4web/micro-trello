import React, { Fragment } from "react";
import { AddMember } from "./AddMember";
import { useDispatch } from "react-redux";
export const MemberDialog = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <AddMember />
    </Fragment>
  );
};
