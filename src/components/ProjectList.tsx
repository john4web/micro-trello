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
          <ul
            key={index}
            className="m-4 p-4 shadow-md border border-l-8 bg-white w-60 text-gray-700 overflow-hidden"
            style={{ borderColor: `${project.color}` }}
          >
            <div className="project-dropdown">
              <DropDownMenu type="project" item={project} />
            </div>
            <li>
              <div className="block px-9 py-10">
                <Link
                  to={{
                    pathname: `/board/${project.id}`,
                    state: project.name,
                  }}
                >
                  {project.name}
                </Link>
              </div>
            </li>
          </ul>
        );
      })}
    </Fragment>
  );
};
