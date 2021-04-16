import { Column, Project } from "../types/types";
import { ModalAddTask } from "./ModalAddTask";
import { TaskComponent } from "./TaskComponent";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DropDownMenu } from "./DropDownMenu";

interface IProps {
  boardID: string;
  column: Column;
  project: Project;
}

export const ColumnComponent = ({ boardID, column, project }: IProps) => {
  return (
    <Droppable droppableId={column.id} key={column.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver ? "#9ca3af" : "#f9fafb",
          }}
          {...provided.droppableProps}
          className="droppable w-96 bg-gray-300 border-gray-400 border shadow-md p-2 m-5 inline-block align-top"
        >
          <div className="column-dropdown">
            <DropDownMenu type="column" item={column} />
          </div>
          <div className="uppercase text-center mb-7">{column.name}</div>

          <div>
            <div>
              {column.tasks?.map((task, index) => {
                var color = "";
                if (task.priority === "low") {
                  color = "green";
                }
                if (task.priority === "medium") {
                  color = "yellow";
                }
                if (task.priority === "high") {
                  color = "red";
                }
                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          id={task.id}
                          className="border-l-8"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            borderColor: `${color}`,
                            backgroundColor: snapshot.isDragging
                              ? "#d1d5db"
                              : "#e5e7eb",
                            ...provided.draggableProps.style,
                          }}
                        >
                          {" "}
                          <TaskComponent task={task} project={project} />
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
            </div>
          </div>

          <ModalAddTask column={column} boardID={boardID} project={project} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
