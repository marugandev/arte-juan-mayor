import "./MainLayout.css";

import { useScrollToSection } from "../../../hooks/useScrollToSection";
import Header from "../../organisms/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../organisms/Footer/Footer";
import ScrollTop from "../../atoms/ScrollTop/ScrollTop";

const ScrollWrapper = () => {
  useScrollToSection();
  return <Outlet />;
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <ScrollWrapper />
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
