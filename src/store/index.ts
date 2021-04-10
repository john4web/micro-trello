import { combineReducers, createStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import projectReducer from "./projectSlice";
import taskReducer from "./taskSlice";
import columnReducer from "./columnSlice";
import { loadLocalStorage } from "./localStorage";

const reducers = combineReducers({
  member: memberReducer,
  project: projectReducer,
  task: taskReducer,
  column: columnReducer,
});
const persitentState = loadLocalStorage();
export const store = createStore(reducers, persitentState);

export type RootState = ReturnType<typeof store.getState>;
