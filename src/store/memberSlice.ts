import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Member } from "../types/member";
import { v4 as uuid } from "uuid";

type MemberState = {
    members: Member[];
    showOnlyDone: boolean;
};

const initialState: MemberState = {
    members: [],
    showOnlyDone: false,
};

const memberSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        addMember(state, action: PayloadAction<string>) {
            state.members.push({
                // Generate the id outside
                id: uuid(),
                firstname: action.payload,
                lastname: action.payload,
                job: action.payload,
                skill: action.payload,
            });
        },
        toggleMember(state, action: PayloadAction<Member>) { },
        toggleFilter(state) { },
    },
});

export default memberSlice.reducer;

export const { addMember, toggleMember, toggleFilter } = memberSlice.actions;
