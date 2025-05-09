import "./Header.css";

import LogoGroup from "../../molecules/LogoGroup/LogoGroup";
import Navbar from "../../molecules/Navbar/Navbar";
import NavSecondary from "../../molecules/NavSecondary/NavSecondary";

const Header = () => {
  console.log("Header");

  return (
    <header className="site-header">
      <LogoGroup />
      <div className="nav-container">
        <Navbar />
        <NavSecondary />
      </div>
    </header>
  );
};

export default Header;
