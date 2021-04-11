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
