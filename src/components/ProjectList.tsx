import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  return (
    <Fragment>
      <ul>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="m-4 shadow-md border border-l-8 bg-white"
              style={{ borderColor: `${project.color}` }}
            >
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
          );
        })}
      </ul>
    </Fragment>
  );
};
