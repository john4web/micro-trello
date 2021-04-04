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
          <ul key={index} className="bg-gray-300 border-black border-2 p-2">
            <li className="font-bold text-center mb-2">{column.name}</li>

            <li>
              <div>
                {column.tasks?.map((task, index) => {
                  return (
                    <div
                      key={index}
                      className="align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12 "
                    >
                      {`Taskname: ${task.name}`}
                      {task.team.map((member) => {
                        return ` Assigned Member: ${member.firstname} ${member.lastname}`;
                      })}
                    </div>
                  );
                })}
              </div>
            </li>

            <ModalAddTask column={column} boardID={boardID} />
          </ul>
        );
      })}
    </Fragment>
  );
};
