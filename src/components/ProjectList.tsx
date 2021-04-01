import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  return (
    <Fragment>
      {projects.map((project, index) => {
        return (
          <ul key={index}>
            <li>{project.name}</li>
            <li>{project.team}</li>
            <li>{project.color}</li>
            <li>{project.category}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
