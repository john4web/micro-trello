import { Fragment } from "react";
import { Project } from "../types/types";
import { ModalAddTask } from "./ModalAddTask";

interface IProps {
  boardID: string;
  project: Project;
}

export const ColumnList = ({ boardID, project }: IProps) => {
  let onDragStart = function (ev: any, id: string) {
    console.log("dragstart: ", id);
    ev.dataTransfer.setData("id", id);
  };
  let onDragOver = function (ev: any) {
    ev.preventDefault();
  };
  let onDrop = function (ev: any, cat: string) {
    let id = ev.dataTransfer.getData("id");
    console.log("dropped: ", id, "in: ", cat);
  };
  return (
    <Fragment>
      {project?.columns?.map((column, index) => {
        return (
          <ul
            key={index}
            className="bg-gray-300 border-black border-2 p-2 inline-block align-top dropable"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, column.name)}
          >
            <li className={`font-bold text-center mb-2 ${column.id}`}>
              {column.name}
            </li>

            <li>
              <div>
                {column.tasks?.map((task, index) => {
                  return (
                    <div
                      key={index}
                      onDragStart={(e) => onDragStart(e, task.name)}
                      draggable
                      className={`align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12 draggable${task.columnID}`}
                    >
                      {`Taskname: ${task.name}`}
                      {`Deadline: ${task.deadline}`}
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
