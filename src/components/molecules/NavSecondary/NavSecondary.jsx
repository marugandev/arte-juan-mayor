import "./NavSecondary.css";

import { NavLink } from "react-router-dom";

const NavSecondary = () => {
  return (
    <nav className="navbar-secondary">
      <ul>
        <li className="list-item">
          <NavLink className="nav-link-secondary" to="juan-mayor">
            Sobre mí
          </NavLink>
          <NavLink className="nav-link-secondary" to="contacto">
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavSecondary;
