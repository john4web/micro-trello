import { Fragment } from "react";
import { Column, Project, Task } from "../types/types";
import { ColumnComponent } from "./ColumnComponent";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateProject } from "../store/projectSlice";
interface IProps {
  boardID: string;
  project: Project;
}

export const ColumnList = ({ boardID, project }: IProps) => {
  const dispatch = useDispatch();
  const onDragEnd = (result: any) => {
    if (result.destination === null) {
      console.log("ins nichts");
      //Wenn Task ins "nichts" gezogen wird  --> abbrechen
      return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      console.log("in andere column");

      //perform a a deep copy of the object
      //explanation: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#_3-using-json
      let projectCopy = JSON.parse(JSON.stringify(project));

      //Wenn Task in eine andere column gezogen wird
      //delete task from original column and insert it in new column
    } else {
      //When task is dragged in the same column

      //perform a a deep copy of the object
      //explanation: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#_3-using-json
      let projectCopy = JSON.parse(JSON.stringify(project));

      const column: Column = projectCopy.columns!.filter(
        (column: Column) => column.id === source.droppableId
      )[0];

      let tasks: Task[] = column.tasks!;
      const draggedTask = tasks.filter(
        (task) => task.id === result.draggableId
      )[0];

      //remove one element from index "source.index"
      tasks.splice(source.index, 1);

      //insert element at index destination.index
      tasks.splice(destination.index, 0, draggedTask);

      dispatch(updateProject(projectCopy));
    }
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
