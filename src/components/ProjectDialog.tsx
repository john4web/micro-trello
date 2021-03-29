interface IProps {
  closeProjectDialog: Function;
  // any other props that come into the component
}

export const ProjectDialog = ({ closeProjectDialog }: IProps) => {
  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
      <div className="w-80 h-80 bg-white opacity-100">
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

        <button
          onClick={() => {
            closeProjectDialog();
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          CLOSE
        </button>

        <button
          onClick={() => {
            closeProjectDialog();
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          Create new Project
        </button>
      </div>
    </div>
  );
};
