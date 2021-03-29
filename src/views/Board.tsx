import React, { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Add Task</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add Task"
      >
        <button onClick={toggleModal}>x</button>

        <form>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Category:
            <input type="text" name="category" />
          </label>
          <label>
            Priority:
            <input type="text" name="priority" />
          </label>
          <label>
            Duration:
            <input type="text" name="duration" />
          </label>
          <label>
            Due Date:
            <input type="date" name="duedate" />
          </label>
          <input type="submit" value="Add Task" />
        </form>
      </Modal>
    </div>
  );
}
