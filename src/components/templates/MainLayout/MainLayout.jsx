import "./MainLayout.css";

import { useScrollToSection } from "../../../hooks/useScrollToSection";
import Header from "../../organisms/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../organisms/Footer/Footer";

const MainLayout = () => {
  useScrollToSection();

  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
