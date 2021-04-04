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
          <ul key={index}>
            <li>{column.name}</li>

            <li>
              <div>
                {/* <TaskList /> */}
                {column.tasks?.map((task, index) => {
                  return (
                    <div>
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
