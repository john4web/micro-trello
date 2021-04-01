import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/categorySlice";
import { Category } from "../types/types";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalCategoryContent = ({ closeModal, type }: IProps) => {
  const [firstname, setName] = useState("");
  const dispatch = useDispatch();

  const onAdd = () => {
    const newCategory: Category = {
      id: "",
      name: firstname,
    };

    dispatch(addCategory(newCategory));
  };

  return (
    <div>
      <label htmlFor="category-name"> Name:</label>
      <input
        value={firstname}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        id="category-name"
        name="category-name"
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
