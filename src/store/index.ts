import { combineReducers, createStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import projectReducer from "./projectSlice";
import { loadLocalStorage } from "./localStorage";

const reducers = combineReducers({
  member: memberReducer,
  project: projectReducer,
});
const persitentState = loadLocalStorage();
export const store = createStore(reducers, persitentState);

export type RootState = ReturnType<typeof store.getState>;
