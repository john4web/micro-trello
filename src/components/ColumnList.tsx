import { Fragment } from "react";
import { Project } from "../types/types";

interface IProps {
  boardID: String;
  project: Project;
}

export const ColumnList = ({ boardID, project }: IProps) => {
  return (
    <Fragment>
      {project?.columns?.map((column, index) => {
        return (
          <ul key={index}>
            <li>{column.name}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
