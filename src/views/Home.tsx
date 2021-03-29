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
      <button onClick={toggleModal}>Add Project</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Add project"
      >
        <button onClick={toggleModal}>x</button>

        <form>
          <label>
            Project Name:
            <input type="text" name="name" />
          </label>
          <label>
            Team:
            <input type="text" name="team" />
          </label>
          <label>
            Color:
            <input type="textfield" name="color" />
          </label>
          <label>
            Category:
            <select>
              {" "}
              <option value="web">Web Project</option>
              <option value="game">Game Project</option>
              <option value="computergraphics">
                Computer Graphics Project
              </option>
            </select>
          </label>
          <input type="submit" value="Add Project" />
        </form>
      </Modal>
    </div>
  );
}
