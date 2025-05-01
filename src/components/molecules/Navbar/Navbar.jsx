import "./Navbar.css";

import { navRoutes } from "../../../routes/navRoutes";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <ul>
        {navRoutes?.map((route) => (
          <li
            className="list-item"
            key={route.id}
            onClick={() => handleClick(route.path)}
          >
            <NavLink
              className="nav-link"
              to={route.path}
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
