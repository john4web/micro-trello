import { Fragment } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { removeMember } from "../store/memberSlice";
import { ModalUpdateMember } from "./ModalUpdateMember";
import { store } from "../store";
import {
  removeColumnFromProject,
  removeProject,
  removeTaskFromProjectColumn,
} from "../store/projectSlice";
import { ModalUpdateProject } from "./ModalUpdateProject";
import { ModalUdateColumn } from "./ModalUpdateColumn";
import { ModalUpdateTask } from "./ModalUpdateTask";
import { Project } from "../types/types";

interface IProps {
  type: string;
  item: any;
  project?: Project;
}

export const DropDownMenu = ({ type, item, project }: IProps) => {
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
  let [modalTaskIsOpen, setModalTaskIsOpen] = React.useState<boolean>(false);
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
            case "task":
              setModalTaskIsOpen(false);
              break;
            default:
              console.log("It was not possible to close the modal window");
          }
        });

        store.subscribe(() => {
          setModalMemberIsOpen(false);
          setModalProjectIsOpen(false);
          setModalColumnIsOpen(false);
          setModalTaskIsOpen(false);
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
      case "task":
        return (
          <ModalUpdateTask
            task={item}
            project={project}
            modalIsOpen={modalTaskIsOpen}
          />
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
      case "task":
        dispatch(removeTaskFromProjectColumn(item));
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
      case "task":
        setModalTaskIsOpen(true);
        break;
      default:
        console.log("It was not possible to remove the current object");
    }
  };

  return (
    <Fragment>
      <div className="dropdown-menu relative">
        <button
          className="btn-dropdown inline-flex float-right items-center justify-center w-10 h-10 mt-1 mr-1 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
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
          <div className="absolute left-full w-56 top-1">
            <ul
              key={type + item.id}
              className="shadow-md border bg-white text-gray-700 p-0 m-0"
            >
              <li
                className="btn-edit py-2 px-3 cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  dropDownIsVisible(false);
                  onUpdate();
                }}
              >
                Edit
              </li>
              <li
                className="btn-remove py-2 px-3 cursor-pointer hover:bg-gray-200"
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
