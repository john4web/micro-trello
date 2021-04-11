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
      //Wenn Task ins "nichts" gezogen wird  --> abbrechen
      return;
    }

    const { source, destination } = result;

    //perform a a deep copy of the object
    //explanation: https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#_3-using-json
    let projectCopy = JSON.parse(JSON.stringify(project));
    if (source.droppableId !== destination.droppableId) {
      // When task is dragged into any other column
      let draggedTask!: Task;

      projectCopy.columns!.every((column: Column) => {
        if (column.id === source.droppableId) {
          return column.tasks!.every((task: Task, index) => {
            if (task.id === result.draggableId) {
              //delete dragged Task from source column
              column.tasks!.splice(index, 1);
              draggedTask = task;
              return false;
            }
            return true;
          });
        }
        return true;
      });

      projectCopy.columns!.every((column: Column) => {
        if (column.id === destination.droppableId) {
          if (column.tasks === undefined) {
            column.tasks = [];
          }
          //insert element at index destination.index
          column.tasks.splice(destination.index, 0, draggedTask);
        }
        return true;
      });
    } else {
      //When task is dragged into the same column

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
    }
    dispatch(updateProject(projectCopy));
  };
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {project?.columns?.map((column, index) => {
          return (
            <div key={index}>
              <ColumnComponent
                boardID={boardID}
                column={column}
                project={project}
              />
            </div>
          );
        })}
      </DragDropContext>
    </Fragment>
  );
};
