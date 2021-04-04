import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";
import { v4 as uuid } from "uuid";

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push({
        //Generate the id outside
        id: uuid(),
        projectID: action.payload.projectID,
        columnID: action.payload.columnID,
        name: action.payload.name,
        team: action.payload.team,
        deadline: action.payload.deadline,
      });
    },
  },
});

export default taskSlice.reducer;

export const { addTask } = taskSlice.actions;
