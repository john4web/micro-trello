import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { Task } from "../types/task";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalTaskContent = ({ closeModal, type }: IProps) => {
  const [name, setName] = useState("");
  const [assignedMember, setAssignedMember] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    const newTask: Task = {
      id: "",
      name: name,
      assignedMember: assignedMember,
      duration: duration,
      category: category,
    };

    dispatch(addTask(newTask));
  };

  return (
    <div>
      <label htmlFor="task-name"> Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        id="task-name"
        name="task-name"
        className="border-black border-2"
      />
      <label htmlFor="task-assignedMember">Assigned Member:</label>
      <input
        value={assignedMember}
        onChange={(e) => setAssignedMember(e.currentTarget.value)}
        type="text"
        id="task-assignedMember"
        name="task-assignedMember"
        className="border-black border-2"
      />
      <label htmlFor="task-duration">Duration:</label>
      <input
        value={duration}
        onChange={(e) => setDuration(e.currentTarget.value)}
        type="text"
        id="task-duration"
        name="task-duration"
        className="border-black border-2"
      />

      <label htmlFor="task-category">Category:</label>
      <input
        value={category}
        onChange={(e) => setCategory(e.currentTarget.value)}
        type="text"
        id="task-category"
        name="task-category"
        className="border-black border-2"
      />
      <button
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={() => {
          onAdd();
          closeModal();
        }}
      >
        Add
      </button>
    </div>
  );
};
