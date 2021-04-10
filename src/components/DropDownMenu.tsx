import { Fragment } from "react";
import "../styles/DropDown.css";
import React from "react";
import { useDispatch } from "react-redux";
import { removeMember } from "../store/memberSlice";

interface IProps {
  type: string;
  item: any;
}

export const DropDownMenu = ({ type, item }: IProps) => {
  let [dropDownIsOpen, dropDownIsVisible] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.addEventListener("click", () => {
      if (dropDownIsOpen) {
        dropDownIsVisible(false);
        dropDownIsOpen = false;
      }
    });
  });

  const onRemove = () => {
    switch (type) {
      case "member":
        dispatch(removeMember(item.id));
        break;
      default:
        console.log("It was not possible to remove the current object");
    }
  };

  const onUpdate = () => {
    console.log("update member!");
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
      </div>
    </Fragment>
  );
};
