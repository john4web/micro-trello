import { combineReducers, createStore } from "@reduxjs/toolkit";
import memberReducer from "./memberSlice";
import projectReducer from "./projectSlice";
import { loadLocalStorage } from "./localStorage";

const reducers = combineReducers({
  member: memberReducer,
  project: projectReducer,
});
//set persistentState to get data from the local storage on start of the application
const persitentState = loadLocalStorage();
export const store = createStore(reducers, persitentState);

export type RootState = ReturnType<typeof store.getState>;
