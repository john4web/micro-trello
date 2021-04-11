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
          style={{ backgroundColor: snapshot.isDraggingOver ? "blue" : "grey" }}
          {...provided.droppableProps}
          className="w-96 bg-gray-300 border-gray-400 border shadow-md p-2 m-5 inline-block align-top"
        >
          <div className="column-dropdown">
            <DropDownMenu type="column" item={column} />
          </div>
          <div className="font-bold text-center mb-7">{column.name}</div>

          <div>
            <div>
              {column.tasks?.map((task, index) => {
                return (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            backgroundColor: snapshot.isDragging
                              ? "#263B4A"
                              : "#456C86",
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
