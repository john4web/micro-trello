import { Link, useLocation } from "react-router-dom";
export const MenuBar = () => {
  const activeColor: string = "bg-red-400";
  const location = useLocation();

  return (
    <ul className="bg-gray-400 flex-col flex">
      <li
        className={`w-48 ${
          location.pathname !== "/members" ? activeColor : ""
        }`}
      >
        <Link to="/" className="block px-9 py-10">
          Home
        </Link>
      </li>
      <li
        className={`w-48 ${
          location.pathname === "/members" ? activeColor : ""
        }`}
      >
        <Link to="/members" className="block px-9 py-10">
          Members
        </Link>
      </li>
    </ul>
  );
};
