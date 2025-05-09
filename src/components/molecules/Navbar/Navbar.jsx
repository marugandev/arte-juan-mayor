import "./Navbar.css";

import { useNavigate, useLocation } from "react-router-dom";
import { navRoutes } from "../../../routes/navRoutes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
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
            <a
              className={`link ${isActive(route.path) ? "active" : ""}`}
              href={route.path}
              style={{ marginLeft: `${route.level * 1.5}rem` }}
            >
              {route.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
