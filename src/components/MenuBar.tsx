import { Link } from "react-router-dom";
export const MenuBar = () => {
  return (
    <div>
      MenuBar
      <Link to="/">Home</Link>
      <Link to="/members">Members</Link>
    </div>
  );
};
