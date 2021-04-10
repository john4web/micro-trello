import { Link, useLocation } from "react-router-dom";
export const MenuBar = () => {
  const activeColor: string = "bg-red-500";
  const location = useLocation();

  return (
    <ul className="bg-gray-800 flex-col flex">
      <li
        className={`w-32 ${
          location.pathname !== "/members" ? activeColor : ""
        }`}
      >
        <Link to="/" className="block text-center py-10 text-white">
          Home
        </Link>
      </li>
      <li
        className={`w-32 ${
          location.pathname === "/members" ? activeColor : ""
        }`}
      >
        <Link to="/members" className="block text-center py-10 text-white">
          Members
        </Link>
      </li>
    </ul>
  );
};
