import "./Header.css";

import LogoGroup from "../../molecules/LogoGroup/LogoGroup";
import Navbar from "../../molecules/Navbar/Navbar";
import NavSecondary from "../../molecules/NavSecondary/NavSecondary";

const Header = () => {
  console.log("Header");

  return (
    <header className="site-header p-lg">
      <LogoGroup />
      <div className="nav-container gap-lg">
        <Navbar />
        <NavSecondary />
      </div>
    </header>
  );
};

export default Header;
