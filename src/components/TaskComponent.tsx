import { Project, Task } from "../types/types";
import { DropDownMenu } from "./DropDownMenu";

interface IProps {
  task: Task;
  project: Project;
}

export const TaskComponent = ({ task, project }: IProps) => {
  return (
    <div className="draggable align-middle m-auto mt-2 p-2 w-11/12">
      <div>
        <DropDownMenu type="task" item={task} project={project} />
      </div>
      {task.team.map((member, index) => {
        return (
          <div key={index} className="inline-block float-right">
            <img
              src={member.photo}
              alt="img"
              className="max-w-xs max-h-7 inline-block mr-2"
            ></img>
          </div>
        );
      })}
      <ul className="list-none">
        <li className="uppercase">{task.name}</li>
        <li className="text-sm">{`Deadline: ${task.deadline}`} </li>
        <li className="text-sm pt-0">{`Priority: ${task.priority}`} </li>
      </ul>
    </div>
  );
};
