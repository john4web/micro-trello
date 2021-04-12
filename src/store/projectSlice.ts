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
    removeProject(state, action: PayloadAction<String>) {
      let projectsInStorage = state.projects;
      for (let i = 0; i < projectsInStorage.length; i++) {
        if (projectsInStorage[i].id === action.payload) {
          projectsInStorage.splice(i, 1);
        }
      }
    },
    updateProject(state, action: PayloadAction<Project>) {
      try {
        state.projects.every((project, index) => {
          if (project.id === action.payload.id) {
            // replaces 1 element at index
            state.projects.splice(index, 1, action.payload);
            return false;
          }
          return true;
        });
      } catch (e) {
        console.log(e);
        //Todo: auf fehler reagieren!
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
    removeTaskFromProjectColumn(state, action: PayloadAction<Task>) {
      try {
        state.projects.forEach((project: Project) => {
          if (project.id === action.payload.projectID) {
            project.columns?.every((column: Column) => {
              if (column.id === action.payload.columnID) {
                let tasksInStorage = column.tasks;
                if (tasksInStorage) {
                  for (let i = 0; i < tasksInStorage.length; i++) {
                    if (tasksInStorage[i].id === action.payload.id) {
                      tasksInStorage.splice(i, 1);
                    }
                  }
                }
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
    updateTaskFromProjectColumn(state, action: PayloadAction<Task>) {
      try {
        state.projects.forEach((project: Project) => {
          if (project.id === action.payload.projectID) {
            project.columns?.forEach((column: Column) => {
              if (column.id === action.payload.columnID) {
                column.tasks?.forEach((task: Task, index) => {
                  if (task.id === action.payload.id) {
                    column.tasks?.splice(index, 1, action.payload);
                  }
                  return false;
                });
                return true;
              }
              return false;
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
    removeColumnFromProject(state, action: PayloadAction<Column>) {
      state.projects.every((project) => {
        if (project.id === action.payload.projectID) {
          let columnsInStorage = project.columns;
          if (columnsInStorage) {
            for (let i = 0; i < columnsInStorage.length; i++) {
              if (columnsInStorage[i].id === action.payload.id) {
                columnsInStorage.splice(i, 1);
              }
            }
          }
          return false;
        }
        return true;
      });
    },
    updateColumnFromProject(state, action: PayloadAction<Column>) {
      state.projects.every((project) => {
        if (project.id === action.payload.projectID) {
          let columnsInStorage = project.columns;
          if (columnsInStorage) {
            for (let i = 0; i < columnsInStorage.length; i++) {
              if (columnsInStorage[i].id === action.payload.id) {
                columnsInStorage[i].name = action.payload.name;
              }
            }
          }
          return false;
        }
        return true;
      });
    },
  },
});

export default projectSlice.reducer;

export const {
  addProject,
  updateProject,
  removeProject,
  addTaskToProjectColumn,
  removeTaskFromProjectColumn,
  updateTaskFromProjectColumn,
  addColumnToProject,
  removeColumnFromProject,
  updateColumnFromProject,
} = projectSlice.actions;
