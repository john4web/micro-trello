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
      localStorage.setItem("projects", JSON.stringify(state.projects));
    },
    removeProject(state, action: PayloadAction<String>) {
      let arr = state.projects;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload) {
          arr.splice(i, 1);
        }
      }
      localStorage.setItem("projects", JSON.stringify(state.projects));
    },
    addTaskToProjectColumn(state, action: PayloadAction<Task>) {
      try {
        state.projects.forEach((project: Project, index1) => {
          if (project.id === action.payload.projectID) {
            project.columns?.every((column: Column, index2) => {
              if (column.id === action.payload.columnID) {
                if (
                  state.projects[index1].columns![index2]?.tasks === undefined
                ) {
                  state.projects[index1].columns![index2].tasks = [];
                }
                state.projects[index1].columns![index2]?.tasks?.push({
                  ...action.payload,
                });
                return false;
              }
              return true;
            });
          }
        });
        localStorage.setItem("projects", JSON.stringify(state.projects));
      } catch (e) {
        console.log(e);
        //Todo: auf fehler reagieren!
      }
    },

    addColumnToProject(state, action: PayloadAction<Column>) {
      try {
        state.projects.every((project) => {
          if (project.id === action.payload.projectID) {
            if (project.columns === undefined) {
              project.columns = [];
            }

            project.columns?.push({
              ...action.payload,
            });
            return false;
          }
          return true;
        });
        localStorage.setItem("projects", JSON.stringify(state.projects));
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
  addColumnToProject,
} = projectSlice.actions;
