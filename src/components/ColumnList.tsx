import { Fragment } from "react";
import { Project } from "../types/types";
import { ColumnComponent } from "./ColumnComponent";
import { DragDropContext } from "react-beautiful-dnd";
interface IProps {
  boardID: string;
  project: Project;
}

export const ColumnList = ({ boardID, project }: IProps) => {
  const onDragEnd = (result: any) => {
    if (result.destination === null) {
      //Wenn Task ins "nichts" gezogen wird  --> abbrechen
      return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      //Wenn Task in eine andere column gezogen wird
      //delete task from original column and insert it in new column
    } else {
      //Wenn Task in derselben column herumgezogen wird
      //change order of task elements
    }

    console.log(result);
  };
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {project?.columns?.map((column, index) => {
          return (
            <div key={index}>
              <ColumnComponent boardID={boardID} column={column} />
            </div>
          );
        })}
      </DragDropContext>
    </Fragment>
  );
};
