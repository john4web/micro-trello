import { ModalProjectContent } from "../components/ModalProjectContent";
import { ModalColumnContent } from "../components/ModalColumnContent";
import { ModalTaskContent } from "../components/ModalTaskContent";
import { ModalMemberContent } from "../components/ModalMemberContent";

interface IProps {
  closeModal: Function;
  type: String;
}

export const ModalWindow = ({ closeModal, type }: IProps) => {
  function renderContent(type: String) {
    switch (type) {
      case "project":
        return (
          <ModalProjectContent
            closeModal={() => {
              closeModal();
            }}
            type="project"
          />
        );
      case "column":
        return (
          <ModalColumnContent
            closeModal={() => {
              closeModal();
            }}
            type="column"
          />
        );
      case "task":
        return (
          <ModalTaskContent
            closeModal={() => {
              closeModal();
            }}
            type="task"
          />
        );
      case "member":
        return (
          <ModalMemberContent
            closeModal={() => {
              closeModal();
            }}
            type="member"
          />
        );
      default:
        return "Something went wrong :'(";
    }
  }

  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
      <div className="w-4/6 h-4/6 bg-white opacity-100 overflow-auto">
        <button
          onClick={() => {
            closeModal();
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          CLOSE
        </button>
        {renderContent(type)}
      </div>
    </div>
  );
};
