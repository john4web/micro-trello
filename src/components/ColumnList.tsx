import { Fragment } from "react";
import { Project } from "../types/types";
import { ModalAddTask } from "./ModalAddTask";

interface IProps {
  boardID: string;
  project: Project;
}

export const ColumnList = ({ boardID, project }: IProps) => {
  return (
    <Fragment>
      {project?.columns?.map((column, index) => {
        return (
          <ul
            key={index}
            className="w-96 bg-gray-300 border-gray-400 border shadow-md p-2 m-5 inline-block align-top"
          >
            <li className="font-bold text-center mb-2">{column.name}</li>

            <ul>
              <div>
                {column.tasks?.map((task, index) => {
                  return (
                    <div
                      key={index}
                      className="align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12 "
                    >
                      <li>{`Taskname: ${task.name}`}</li>
                      <li>
                        Assigned Members:
                        <ul>
                          {task.team.map((member) => {
                            return (
                              <li>
                                {member.firstname} {member.lastname}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li>{`Deadline: ${task.deadline}`} </li>
                    </div>
                  );
                })}
              </div>
            </ul>

            <ModalAddTask column={column} boardID={boardID} />
          </ul>
        );
      })}
    </Fragment>
  );
};
