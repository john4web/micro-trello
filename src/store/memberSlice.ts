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
        photo: action.payload.photo,
      });
    },
    removeMember(state, action: PayloadAction<String>) {
      let membersInStorage = state.members;
      for (let i = 0; i < membersInStorage.length; i++) {
        if (membersInStorage[i].id === action.payload) {
          membersInStorage.splice(i, 1);
        }
      }
    },
    updateMember(state, action: PayloadAction<Member>) {
      let membersInStorage = state.members;
      for (let i = 0; i < membersInStorage.length; i++) {
        if (membersInStorage[i].id === action.payload.id) {
          membersInStorage[i].firstname = action.payload.firstname;
          membersInStorage[i].lastname = action.payload.lastname;
          membersInStorage[i].job = action.payload.job;
          membersInStorage[i].skill = action.payload.skill;
          membersInStorage[i].photo = action.payload.photo;
        }
      }
    },
  },
  //TODO: implement methods updateMember
});

export default memberSlice.reducer;

export const { addMember, removeMember, updateMember } = memberSlice.actions;
