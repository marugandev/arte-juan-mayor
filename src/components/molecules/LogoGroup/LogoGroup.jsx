import "./LogoGroup.css";

import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import LogoTitle from "../../atoms/LogoTitle/LogoTitle";

const LogoGroup = () => {
  return (
    <Link to="/" className="logo-group gap-md" aria-label="Inicio">
      <Logo />
      <LogoTitle />
    </Link>
  );
};

export default LogoGroup;
