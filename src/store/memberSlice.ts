import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Member } from "../types/types";
import { v4 as uuid } from "uuid";

type MemberState = {
  members: Member[];
};

const initialState: MemberState = {
  members: [],
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    addMember(state, action: PayloadAction<Member>) {
      state.members.push({
        //Generate the id outside
        id: uuid(),
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        job: action.payload.job,
        skill: action.payload.skill,
      });
    },
  },
});

export default memberSlice.reducer;

export const { addMember } = memberSlice.actions;