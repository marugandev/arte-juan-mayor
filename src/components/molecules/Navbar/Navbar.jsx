import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";
import { navRoutes } from "../../../routes/navRoutes";
import { useQueryParams } from "../../../hooks/useQueryParams";

const Navbar = () => {
  const location = useLocation();
  const { category, subcategory } = useQueryParams();

  const isRouteActive = (route) => {
    const routePath = route.path;
    const [routeBase, routeSearch] = routePath.split("?");
    const locationBase = location.pathname;

    if (!routeSearch) {
      return locationBase === routeBase;
    }

    const routeParams = new URLSearchParams(routeSearch);
    const routeCategory = routeParams.get("category");
    const routeSubcategory = routeParams.get("subcategory");

    const matchCategory = routeCategory ? routeCategory === category : true;
    const matchSubcategory = routeSubcategory
      ? routeSubcategory === subcategory
      : true;

    return locationBase === routeBase && matchCategory && matchSubcategory;
  };

  return (
    <nav className="navbar">
      <ul>
        {navRoutes.map((route) => (
          <li className="list-item" key={route.id}>
            <Link
              to={route.path}
              className={`link ${isRouteActive(route) ? "active" : ""}`}
              style={{ marginLeft: `${route.level * 1.5}rem` }}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
