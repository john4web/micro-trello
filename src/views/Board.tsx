import { Link, useParams, useLocation } from "react-router-dom";
import { ColumnList } from "../components/ColumnList";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Project } from "../types/types";
import { ModalAddColumn } from "../components/ModalAddColumn";
export const Board = () => {
  const { projects } = useSelector((state: RootState) => state.project);

  let { boardID } = useParams<{ boardID: string }>();
  let params = useLocation();

  //get current Project from store
  let currentProject: Project = projects.filter(
    (project) => project.id === boardID
  )[0];

  return (
    <div className="bg-gray-100 w-full">
      <div
        className="bg-gray-300 h-20 border-b-2"
        style={{ borderColor: `${currentProject?.color}` }}
      >
        <div className="float-left m-2 mt-6">
          <div
            style={{
              backgroundColor: `${currentProject?.color}`,
              width: "15px",
              height: "15px",
            }}
            className="inline-block ml-2 mr-2"
          ></div>
          <h2 className="text-lg text-gray-700 uppercase inline-block mr-4">
            {params.state}{" "}
          </h2>

          {currentProject?.team.map((member, index) => {
            return (
              <img
                key={index}
                src={member.photo}
                alt="img"
                className="max-w-xs max-h-7 inline-block mr-2"
              ></img>
            );
          })}
        </div>
        <ModalAddColumn project={currentProject} />
      </div>

      <div className="flex p-5">
        <Link
          to="/"
          className="btn-back-home flex items-center   h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700                                    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
          Back to Home
        </Link>
      </div>

      <main className="grid grid-rows-1 gap-1 grid-flow-col">
        <ColumnList boardID={boardID} project={currentProject} />
      </main>
    </div>
  );
};
