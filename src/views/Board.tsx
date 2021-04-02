import { Link, useParams, useLocation } from "react-router-dom";
import { ModalWindow } from "../components/ModalWindow";
import { TaskList } from "../components/TaskList";
import React from "react";
import { v4 as uuid } from "uuid";
import { ColumnList } from "../components/ColumnList";
export const Board = () => {
  let [modalColumnIsOpen, setModalColumnIsOpen] = React.useState<boolean>(
    false
  );
  let [modalTaskIsOpen, setModalTaskIsOpen] = React.useState<boolean>(false);

  let { boardID } = useParams<{ boardID: string }>();
  let params = useLocation();
  const taskData = [
    { id: uuid(), content: "First Task" },
    { id: uuid(), content: "Second Task" },
  ];
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
      </div>
      <div>
        <p>Columnlist:</p>
        <ColumnList />
        <p>Tasklist:</p>
        <TaskList />
        <button
          onClick={() => {
            setModalTaskIsOpen(true);
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          + New Task
        </button>

        {modalTaskIsOpen && (
          <ModalWindow
            closeModal={() => {
              setModalTaskIsOpen(false);
            }}
            type="task"
          />
        )}
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
        <button
          onClick={() => {
            setModalColumnIsOpen(true);
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          + New Column
        </button>

        {modalColumnIsOpen && (
          <ModalWindow
            closeModal={() => {
              setModalColumnIsOpen(false);
            }}
            boardID={boardID}
            type="column"
          />
        )}
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
