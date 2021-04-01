import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";
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
        name: action.payload.name,
        assignedMember: action.payload.assignedMember,
        duration: action.payload.duration,
        category: action.payload.category,
      });
    },
  },
});

export default taskSlice.reducer;

export const { addTask } = taskSlice.actions;
