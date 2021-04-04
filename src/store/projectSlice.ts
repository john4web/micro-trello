import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Column, Project, Task } from "../types/types";
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
    addTaskToProjectColumn(state, action: PayloadAction<Task>) {
      try {
        state.projects.forEach((project: Project, index1) => {
          if (project.id === action.payload.projectID) {
            project.columns?.every((column: Column, index2) => {
              if (column.id === action.payload.columnID) {
                state.projects[index1].columns![index2]?.tasks?.push({
                  id: uuid(),
                  projectID: action.payload.projectID,
                  columnID: action.payload.columnID,
                  name: action.payload.name,
                  team: action.payload.team,
                  deadline: action.payload.deadline,
                });

                return false;
              }
              return true;
            });
          }
        });
      } catch (e) {
        console.log(e);
        //Todo: auf fehler reagieren!
      }
    },
  },
});

export default projectSlice.reducer;

export const {
  addProject,
  updateProject,
  removeProject,
  addTaskToProjectColumn,
} = projectSlice.actions;
