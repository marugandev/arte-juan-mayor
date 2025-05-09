import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { navRoutes } from "../../../routes/navRoutes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {navRoutes?.map((route) => (
          <li className="list-item" key={route.id}>
            <NavLink
              to={route.path}
              className={({ isActive }) => `link ${isActive ? "active" : ""}`}
              style={{ marginLeft: `${route.level * 1.5}rem` }}
            >
              {route.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
