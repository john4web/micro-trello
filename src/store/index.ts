import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import projectReducer from "./projectSlice";
import taskReducer from "./taskSlice";
import columnReducer from "./columnSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    member: memberReducer,
    project: projectReducer,
    task: taskReducer,
    column: columnReducer,
    category: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
