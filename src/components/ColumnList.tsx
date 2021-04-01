import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Fragment } from "react";

export const ColumnList = () => {
  const { columns } = useSelector((state: RootState) => state.column);

  return (
    <Fragment>
      {columns.map((column, index) => {
        return (
          <ul key={index}>
            <li>{column.name}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};
