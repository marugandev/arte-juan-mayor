import "./MainLayout.css";

import { useScrollToSection } from "../../../hooks/useScrollToSection";
import Header from "../../organisms/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../organisms/Footer/Footer";

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
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
