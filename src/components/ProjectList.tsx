import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  return (
    <Fragment>
      {projects.map((project) => {
        return (
          <ul
            className="m-4 p-4 shadow-md border border-l-8 bg-white w-60 text-gray-700"
            style={{ borderColor: `${project.color}` }}
          >
            <li key={project.id}>
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
