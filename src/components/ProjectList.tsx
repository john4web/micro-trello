import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { DropDownMenu } from "./DropDownMenu";

export const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  return (
    <Fragment>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="m-4 shadow-md border border-l-8 bg-white w-60"
            style={{ borderColor: `${project.color}` }}
          >
            <div className="project-dropdown">
              <DropDownMenu type="project" item={project} />
            </div>
            <Link
              to={{
                pathname: `/board/${project.id}`,
                state: project.name,
              }}
            >
              <div>
                <div className="p-16">{project.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
};
