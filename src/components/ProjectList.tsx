import { useSelector } from "react-redux";
import { RootState } from "../store";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalWindow } from "../components/ModalWindow";

export const ProjectList = () => {
  const { projects } = useSelector((state: RootState) => state.project);
  const { categories } = useSelector((state: RootState) => state.category);
  let [projectModalIsOpen, setProjectModalIsOpen] = React.useState<{
    [index: string]: any;
  }>({});

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <div>{category.name}</div>

            <ul>
              {projects
                .filter((proj) => proj.category === category.id)
                .map((project) => {
                  return (
                    <li
                      key={project.id}
                      className=" m-4 border-black border-2"
                      style={{ backgroundColor: `${project.color}` }}
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

            <button
              onClick={() => {
                let obj = projectModalIsOpen;
                obj[category.id] = true;
                setProjectModalIsOpen(obj);
                console.log(obj);
                console.log(projectModalIsOpen[category.id]);
              }}
              className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
            >
              Add New Project to Category {category.name}
            </button>
            {projectModalIsOpen[category.id] && (
              <ModalWindow
                closeModal={() => {
                  let obj = projectModalIsOpen;
                  obj[category.id] = false;
                  setProjectModalIsOpen(obj);
                }}
                type="project"
              />
            )}
          </div>
        );
      })}

      {/*<Fragment>
      <ul>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className=" m-4 border-black border-2"
              style={{ backgroundColor: `${project.color}` }}
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

      <ul>
        <div>asasasas</div>
      </ul>

      <ul>
        <div>asasasas</div>
      </ul>
    </Fragment>*/}
    </div>
  );
};
