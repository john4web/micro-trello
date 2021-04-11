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
    updateOnlyProject(state, action: PayloadAction<Project>) {
      let projectsInStorage = state.projects;
      for (let i = 0; i < projectsInStorage.length; i++) {
        if (projectsInStorage[i].id === action.payload.id) {
          projectsInStorage[i].name = action.payload.name;
          projectsInStorage[i].team = action.payload.team;
          projectsInStorage[i].color = action.payload.color;
          projectsInStorage[i].columns = action.payload.columns;
        }
      }
    },
    removeProject(state, action: PayloadAction<String>) {
      let projectsInStorage = state.projects;
      for (let i = 0; i < projectsInStorage.length; i++) {
        if (projectsInStorage[i].id === action.payload) {
          projectsInStorage.splice(i, 1);
        }
      }
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
  updateOnlyProject,
  removeProject,
  addTaskToProjectColumn,
  addColumnToProject,
} = projectSlice.actions;
