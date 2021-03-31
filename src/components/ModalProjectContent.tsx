interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalProjectContent = ({ closeModal, type }: IProps) => {
  return (
    <div>
      <label htmlFor="project-name">Project Name:</label>
      <input
        type="text"
        id="project-name"
        name="project-name"
        className="border-black border-2"
      />
      <label htmlFor="project-team">Project Team:</label>
      <input
        type="text"
        id="project-team"
        name="project-team"
        className="border-black border-2"
      />
      <label htmlFor="project-color">Project Color:</label>
      <input
        type="text"
        id="project-color"
        name="project-color"
        className="border-black border-2"
      />

      <label>
        Category:
        <select>
          {" "}
          <option value="web">Web Project</option>
          <option value="game">Game Project</option>
          <option value="computergraphics">Computer Graphics Project</option>
        </select>
      </label>
      <button
        className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={() => {
          // onAdd();
          closeModal();
        }}
      >
        Add
      </button>
    </div>
  );
};
