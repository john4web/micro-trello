export const ModalColumnContent = () => {
  return (
    <div>
      <label htmlFor="column-name">Column Name:</label>
      <input
        type="text"
        id="column-name"
        name="column-name"
        className="border-black border-2"
      />
    </div>
  );
};
