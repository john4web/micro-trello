import { Project, Task } from "../types/types";
import { DropDownMenu } from "./DropDownMenu";

interface IProps {
  task: Task;
  project: Project;
}

export const TaskComponent = ({ task, project }: IProps) => {
  return (
    <div className="align-middle m-auto mt-2 p-2 bg-gray-200 w-11/12">
      <div className="column-dropdown">
        <DropDownMenu type="task" item={task} project={project} />
      </div>
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
    </div>
  );
};
