import { Fragment } from "react";
import "../styles/DropDown.css";
import React from "react";
import { useDispatch } from "react-redux";
import { removeMember } from "../store/memberSlice";
import { ModalUpdateMember } from "./ModalUpdateMember";
import { store } from "../store";
import { removeColumnFromProject, removeProject } from "../store/projectSlice";
import { ModalUpdateProject } from "./ModalUpdateProject";
import { ModalUdateColumn } from "./ModalUpdateColumn";

interface IProps {
  type: string;
  item: any;
}

export const DropDownMenu = ({ type, item }: IProps) => {
  let [dropDownIsOpen, dropDownIsVisible] = React.useState<boolean>(false);
  let [modalMemberIsOpen, setModalMemberIsOpen] = React.useState<boolean>(
    false
  );
  let [modalProjectIsOpen, setModalProjectIsOpen] = React.useState<boolean>(
    false
  );
  let [modalColumnIsOpen, setModalColumnIsOpen] = React.useState<boolean>(
    false
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.addEventListener("click", () => {
      if (dropDownIsOpen) {
        dropDownIsVisible(false);
        dropDownIsOpen = false;
      }
    });
    let btnList = document.getElementsByClassName("close-update-modal");
    if (btnList.length !== 0) {
      for (let btn of Array.from(btnList)) {
        btn.addEventListener("click", () => {
          switch (type) {
            case "member":
              setModalMemberIsOpen(false);
              break;
            case "project":
              setModalProjectIsOpen(false);
              break;
            case "column":
              setModalColumnIsOpen(false);
              break;
            default:
              console.log("It was not possible to close the modal window");
          }
        });

        store.subscribe(() => {
          setModalMemberIsOpen(false);
          setModalProjectIsOpen(false);
          setModalColumnIsOpen(false);
        });
      }
    }
    document.addEventListener("click", () => {
      if (dropDownIsOpen) {
        dropDownIsVisible(false);
        dropDownIsOpen = false;
      }
    });
  });

  function setModalWindowForUpdate() {
    switch (type) {
      case "member":
        return (
          <ModalUpdateMember member={item} modalIsOpen={modalMemberIsOpen} />
        );
      case "project":
        return (
          <ModalUpdateProject project={item} modalIsOpen={modalProjectIsOpen} />
        );
      case "column":
        return (
          <ModalUdateColumn column={item} modalIsOpen={modalColumnIsOpen} />
        );
      default:
        console.log("It was not possible to remove the current object");
    }
  }

  const onRemove = () => {
    switch (type) {
      case "member":
        dispatch(removeMember(item.id));
        break;
      case "project":
        dispatch(removeProject(item.id));
        break;
      case "column":
        dispatch(removeColumnFromProject(item));
        break;
      default:
        console.log("It was not possible to remove the current object");
    }
  };

  const onUpdate = () => {
    switch (type) {
      case "member":
        setModalMemberIsOpen(true);
        break;
      case "project":
        setModalProjectIsOpen(true);
        break;
      case "column":
        setModalColumnIsOpen(true);
        break;
      default:
        console.log("It was not possible to remove the current object");
    }
  };

  return (
    <Fragment>
      <div className="drop-down-menu relative">
        <button
          className="inline-flex float-right items-center justify-center w-10 h-10 mt-1 mr-1 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
          onClick={() => {
            if (dropDownIsOpen) {
              dropDownIsVisible(false);
            } else {
              dropDownIsVisible(true);
            }
          }}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
          </svg>
        </button>
        {dropDownIsOpen && (
          <div className="dropdown">
            <ul
              key={type + item.id}
              className="shadow-md border bg-white text-gray-700"
            >
              <li
                onClick={() => {
                  dropDownIsVisible(false);
                  onUpdate();
                }}
              >
                Edit
              </li>
              <li
                onClick={() => {
                  dropDownIsVisible(false);
                  onRemove();
                }}
              >
                Remove
              </li>
            </ul>
          </div>
        )}
        {setModalWindowForUpdate()}
      </div>
    </Fragment>
  );
};
