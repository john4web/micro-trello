import { Task } from "../types/types";

interface IProps {
  task: Task;
}

export const TaskComponent = ({ task }: IProps) => {
  return (
    <ul className="align-middle m-auto mt-2 p-2 w-11/12 overflow-hidden">
      {task.team.map((member, index) => {
        return (
          <div className="inline-block float-right">
            <img
              key={index}
              src={member.photo}
              alt="img"
              className="max-w-xs max-h-7 inline-block mr-2"
            ></img>
          </div>
        );
      })}

      <li className="uppercase">{task.name}</li>
      <li>{`Deadline: ${task.deadline}`} </li>
      <li>{`Priority: ${task.priority}`} </li>
    </ul>
  );
};
