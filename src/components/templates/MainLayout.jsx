import Header from "../organisms/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="site-main p-lg">
        <Outlet />
      </main>
      {/* <footer>@artejuanmayor</footer> */}
    </>
  );
};

export default MainLayout;
