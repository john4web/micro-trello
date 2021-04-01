import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../store/columnSlice";
import { Column } from "../types/types";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalColumnContent = ({ closeModal, type }: IProps) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    const newColumn: Column = {
      id: "",
      name: name,
    };
    dispatch(addColumn(newColumn));
  };

  return (
    <div>
      <label htmlFor="column-name">Column Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        id="column-name"
        name="column-name"
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
