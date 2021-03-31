export const ModalProjectContent = () => {
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
    </div>
  );
};
