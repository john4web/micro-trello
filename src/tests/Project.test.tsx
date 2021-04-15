import { combineReducers, createStore } from "@reduxjs/toolkit";
import memberReducer, { addMember } from "../store/memberSlice";
import projectReducer, {
  addColumnToProject,
  addProject,
  addTaskToProjectColumn,
  removeColumnFromProject,
  removeProject,
  removeTaskFromProjectColumn,
  updateColumnFromProject,
  updateProject,
  updateTaskFromProjectColumn,
} from "../store/projectSlice";
import { Column, Member, Project, Task } from "../types/types";

describe("Project - Column - Task Components", () => {
  const reducers = combineReducers({
    member: memberReducer,
    project: projectReducer,
  });
  const testStore = createStore(reducers, {});

  const member1: Member = {
    id: "m1",
    firstname: "John",
    lastname: "Doe",
    job: "Test member component",
    skill: "No skill",
    photo: "",
  };

  const member2: Member = {
    id: "m2",
    firstname: "Lisa",
    lastname: "Huber",
    job: "Test member component",
    skill: "No skill",
    photo: "",
  };

  testStore.dispatch(addMember(member1));
  testStore.dispatch(addMember(member2));

  const project1: Project = {
    id: "p1",
    name: "Project 1",
    team: testStore.getState().member.members,
    color: "#ff0000",
    columns: [],
  };

  const project2: Project = {
    id: "p2",
    name: "Project 2",
    team: testStore.getState().member.members,
    color: "#ff0000",
    columns: [],
  };

  /* ---- PROJECT TESTS ---- */
  test("add project", () => {
    expect(testStore.getState().project.projects.length).toEqual(0);
    testStore.dispatch(addProject(project1));
    expect(testStore.getState().project.projects.length).toEqual(1);
    testStore.dispatch(addProject(project2));
    expect(testStore.getState().project.projects.length).toEqual(2);
  });

  test("update project", () => {
    const project1Update: Project = {
      id: testStore.getState().project.projects[0].id,
      name: "Project 1 Update",
      team: [testStore.getState().member.members[1]],
      color: "#ff0000",
      columns: [],
    };

    expect(testStore.getState().project.projects[0].team.length).toEqual(2);
    testStore.dispatch(updateProject(project1Update));
    expect(testStore.getState().project.projects[0].name).toEqual(
      "Project 1 Update"
    );
    expect(testStore.getState().project.projects[0].team.length).toEqual(1);
  });

  test("remove project", () => {
    expect(testStore.getState().project.projects.length).toEqual(2);
    testStore.dispatch(
      removeProject(testStore.getState().project.projects[0].id)
    );
    expect(testStore.getState().project.projects.length).toEqual(1);
  });

  /* ---- COLUMN TESTS ---- */
  test("add column to project", () => {
    let column1: Column = {
      id: "c1",
      name: "Column 1",
      tasks: [],
      projectID: testStore.getState().project.projects[0].id,
    };

    let column2: Column = {
      id: "c2",
      name: "Column 2",
      tasks: [],
      projectID: testStore.getState().project.projects[0].id,
    };

    expect(testStore.getState().project.projects[0].columns?.length).toEqual(
      undefined
    );
    testStore.dispatch(addColumnToProject(column1));
    testStore.dispatch(addColumnToProject(column2));
    expect(testStore.getState().project.projects[0].columns?.length).toEqual(2);
  });

  test("update column from project", () => {
    let column1Update: Column = {
      id: testStore.getState().project.projects[0].columns[0].id,
      name: "Column 1 Update",
      tasks: [],
      projectID: testStore.getState().project.projects[0].id,
    };

    expect(testStore.getState().project.projects[0].columns[0].name).toEqual(
      "Column 1"
    );
    testStore.dispatch(updateColumnFromProject(column1Update));
    expect(testStore.getState().project.projects[0].columns[0].name).toEqual(
      "Column 1 Update"
    );
  });

  test("remove column from project", () => {
    expect(testStore.getState().project.projects[0].columns?.length).toEqual(2);
    testStore.dispatch(
      removeColumnFromProject(
        testStore.getState().project.projects[0].columns[1]
      )
    );
    expect(testStore.getState().project.projects[0].columns?.length).toEqual(1);
  });

  /* ---- TASK TESTS ---- */
  test("add task to project", () => {
    let task1: Task = {
      id: "t1",
      projectID: testStore.getState().project.projects[0].id,
      columnID: testStore.getState().project.projects[0].columns[0].id,
      name: "Task 1",
      team: [],
      deadline: "16.04.2020",
      priority: "high",
    };

    let task2: Task = {
      id: "t2",
      projectID: testStore.getState().project.projects[0].id,
      columnID: testStore.getState().project.projects[0].columns[0].id,
      name: "Task 2",
      team: [],
      deadline: "16.04.2020",
      priority: "low",
    };

    expect(
      testStore.getState().project.projects[0].columns[0].tasks?.length
    ).toEqual(0);
    testStore.dispatch(addTaskToProjectColumn(task1));
    testStore.dispatch(addTaskToProjectColumn(task2));
    expect(
      testStore.getState().project.projects[0].columns[0].tasks?.length
    ).toEqual(2);
  });

  test("update task to project", () => {
    let task2Update: Task = {
      id: testStore.getState().project.projects[0].columns[0].tasks[1].id,
      projectID: testStore.getState().project.projects[0].id,
      columnID: testStore.getState().project.projects[0].columns[0].id,
      name: "Task 2 Update",
      team: testStore.getState().project.projects[0].team,
      deadline: "16.04.2020",
      priority: "low",
    };

    expect(
      testStore.getState().project.projects[0].columns[0].tasks[1].name
    ).toEqual("Task 2");
    expect(
      testStore.getState().project.projects[0].columns[0].tasks[1].team.length
    ).toEqual(0);
    testStore.dispatch(updateTaskFromProjectColumn(task2Update));
    expect(
      testStore.getState().project.projects[0].columns[0].tasks[1].name
    ).toEqual("Task 2 Update");
    expect(
      testStore.getState().project.projects[0].columns[0].tasks[1].team.length
    ).toEqual(2);
  });

  test("remove task to project", () => {
    expect(
      testStore.getState().project.projects[0].columns[0].tasks?.length
    ).toEqual(2);
    testStore.dispatch(
      removeTaskFromProjectColumn(
        testStore.getState().project.projects[0].columns[0].tasks[0]
      )
    );
    expect(
      testStore.getState().project.projects[0].columns[0].tasks?.length
    ).toEqual(1);
  });
});
