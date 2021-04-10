import { Task } from "../types/types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface IProps {
  task: Task;
}

export const TaskComponent = ({ task }: IProps) => {
  return (
    <div className="align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12">
      <li>{`Taskname: ${task.name}`}</li>
      <li>
        Assigned Members:
        <ul>
          {task.team.map((member, index) => {
            return (
              <li key={index}>
                {member.firstname} {member.lastname}
              </li>
            );
          })}
        </ul>
      </li>
      <li>{`Deadline: ${task.deadline}`} </li>
    </div>
  );
};
