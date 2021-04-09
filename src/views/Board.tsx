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
  //TODO: Wenn current Project undefined ist (also wenn jemand eine falsche id eingegeben hat) -> dann auf Home weiterleiten

  return (
    <div className="bg-gray-100 w-full">
      <div className="bg-gray-300 h-20">
        <div className="float-left m-2 mt-6">
          <h2 className="text-lg font-bold inline-block mr-4">
            {params.state}{" "}
          </h2>

          {currentProject?.team.map((member) => {
            return (
              <img
                src={URL.createObjectURL(member.photo)}
                alt="img"
                className="max-w-xs max-h-7 inline-block mr-2"
              ></img>
            );
          })}
        </div>
        <ModalAddColumn boardID={boardID} project={currentProject} />
      </div>
      <p>Project ID: {boardID}</p>

      <p>
        Color:
        {currentProject?.color}
      </p>
      <main className="">
        <ColumnList boardID={boardID} project={currentProject} />
      </main>
      <button className="h-10 px-5 m-2 mt-5 text-white transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-700">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};
