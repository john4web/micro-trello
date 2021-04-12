import { Task } from "../types/types";

interface IProps {
  task: Task;
}

export const TaskComponent = ({ task }: IProps) => {
  return (
    <ul className="align-middle m-auto mt-2 p-2 w-11/12">
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
      <li>{`Priority: ${task.priority}`} </li>
    </ul>
  );
};
