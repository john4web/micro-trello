import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import projectReducer from "./projectSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    project: projectReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
