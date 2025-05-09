import "./Header.css";

import LogoGroup from "../../molecules/LogoGroup/LogoGroup";
import Navbar from "../../molecules/Navbar/Navbar";
import NavSecondary from "../../molecules/NavSecondary/NavSecondary";
import Slideshow from "../../atoms/Slideshow/Slideshow";

const Header = () => {
  return (
    <header className="site-header">
      <div className="video-container">
        <LogoGroup />
        <Slideshow></Slideshow>
      </div>
      <div className="nav-container">
        <Navbar />
        <NavSecondary />
      </div>
    </header>
  );
};

export default Header;
