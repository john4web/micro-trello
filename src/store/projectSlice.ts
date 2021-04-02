import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../types/types";
import { v4 as uuid } from "uuid";

type ProjectState = {
  projects: Project[];
};

const initialState: ProjectState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<Project>) {
      state.projects.push({
        //Generate the id outside
        id: uuid(),
        name: action.payload.name,
        team: action.payload.team,
        color: action.payload.color,
      });
    },
    updateProject(state, action: PayloadAction<Project>) {
      state.projects.push({
        //Generate the id outside
        id: action.payload.id,
        name: action.payload.name,
        team: action.payload.team,
        color: action.payload.color,
        columns: action.payload.columns,
      });
    },
    removeProject(state, action: PayloadAction<String>) {
      let arr = state.projects;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload) {
          arr.splice(i, 1);
        }
      }
    },
  },
});

export default projectSlice.reducer;

export const {
  addProject,
  updateProject,
  removeProject,
} = projectSlice.actions;
