interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalColumnContent = ({ closeModal, type }: IProps) => {
  return (
    <div>
      <label htmlFor="column-name">Column Name:</label>
      <input
        type="text"
        id="column-name"
        name="column-name"
        className="border-black border-2"
      />

      <button
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={() => {
          //  onAdd();
          closeModal();
        }}
      >
        Add
      </button>
    </div>
  );
};
