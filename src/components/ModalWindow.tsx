import { ModalProjectContent } from "../components/ModalProjectContent";
import { ModalColumnContent } from "../components/ModalColumnContent";
import { ModalTaskContent } from "../components/ModalTaskContent";
import { ModalMemberContent } from "../components/ModalMemberContent";

interface IProps {
  closeModal: Function;
  type: String;
}

function renderContent(type: String) {
  switch (type) {
    case "project":
      return <ModalProjectContent />;
    case "column":
      return <ModalColumnContent />;
    case "task":
      return <ModalTaskContent />;
    case "member":
      return <ModalMemberContent />;
    default:
      return "Something went wrong";
  }
}

export const ModalWindow = ({ closeModal, type }: IProps) => {
  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center">
      <div className="w-80 h-80 bg-white opacity-100">
        {renderContent(type)}
        <button
          onClick={() => {
            closeModal();
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          CLOSE
        </button>
        <button
          onClick={() => {
            closeModal();
          }}
          className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          Create new {type}
        </button>
      </div>
    </div>
  );
};
