import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const TaskList = () => {
  const { tasks } = useSelector((state: RootState) => state.task);

  return (
    <Fragment>
      {tasks.map((task, index) => {
        return (
          <ul key={index}>
            <li>{task.name}</li>
            <li>{task.team}</li>
            <li>{task.deadline}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
