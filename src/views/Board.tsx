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
    <div className="ml-3 mt-3">
      <div className="mb-3">
        <h2 className="text-lg font-bold">Projectname: {params.state} </h2>
        <p>Project ID: {boardID}</p>
        <p>
          Team:
          {currentProject?.team.map((member) => {
            return `${member.firstname} ${member.lastname}: ${member.job}`;
          })}
        </p>
        <p>
          Color:
          {currentProject?.color}
        </p>
      </div>
      <div>
        <ColumnList boardID={boardID} project={currentProject} />

        <ModalAddColumn boardID={boardID} project={currentProject} />
      </div>
      <div className="mt-4">
        <Link
          to="/"
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
