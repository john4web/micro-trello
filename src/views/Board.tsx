import { Link, useParams, useLocation } from "react-router-dom";
import { TaskList } from "../components/TaskList";
import React from "react";
import { v4 as uuid } from "uuid";
import { ColumnList } from "../components/ColumnList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Project } from "../types/types";
import { ModalColumnContent } from "../components/ModalColumnContent";
export const Board = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  let { boardID } = useParams<{ boardID: string }>();
  let params = useLocation();
  const taskData = [
    { id: uuid(), content: "First Task" },
    { id: uuid(), content: "Second Task" },
  ];
  //get current Project from store
  let currentProject: Project = projects.filter(
    (project) => project.id === boardID
  )[0];
  //TODO: Wenn current Project undefined ist (also wenn jemand eine falsche id eingegeben hat) -> dann auf Home weiterleiten
  const columnData = [
    {
      id: uuid(),
      name: "Todo",
      tasks: [taskData],
    },
    {
      id: uuid(),
      name: "Doing",
      tasks: [taskData],
    },
    {
      id: uuid(),
      name: "Done",
      tasks: [taskData],
    },
  ];

  return (
    <div className="ml-3 mt-3">
      <div className="mb-3">
        <h2 className="text-lg font-bold">Projectname: {params.state} </h2>
        <p>Project ID: {boardID}</p>
        <p>
          Team:
          {currentProject?.team.map((member) => {
            return `${member.firstname} ${member.lastname}: ${member.job}`;
          })}
        </p>
        <p>
          Color:
          {currentProject?.color}
        </p>
      </div>
      <div>
        <p>Columnlist:</p>
        <ColumnList boardID={boardID} project={currentProject} />
        <p>Tasklist:</p>
        <TaskList />

        <ul key="columnData">
          {columnData.map((column) => {
            return (
              <li
                id={column.id}
                key={column.id}
                className="bg-gray-300 border-black border-2 p-2"
              >
                <div className="font-bold text-center mb-2">{column.name}</div>
                <div>
                  {column.tasks.map((task) => {
                    return (
                      <ul key="TaskData">
                        {task.map((taskData) => {
                          return (
                            <li
                              id={column.id + taskData.id}
                              key={column.id + taskData.id}
                              className="align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12 "
                            >
                              {taskData.content}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>

        <ModalColumnContent boardID={boardID} />
      </div>
      <div className="mt-4">
        <Link
          to="/"
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
