import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

interface IProps {
  boardID: String;
}

export const ColumnList = ({ boardID }: IProps) => {
  const { projects } = useSelector((state: RootState) => state.project);

  return (
    <Fragment>
      {projects
        .filter((project) => project.id === boardID)[0]
        ?.columns?.map((column, index) => {
          return (
            <ul key={index}>
              <li>{column.name}</li>
            </ul>
          );
        })}
    </Fragment>
  );
};
