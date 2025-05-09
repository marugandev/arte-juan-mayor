import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/templates/MainLayout/MainLayout";
import CompleteWork from "./components/pages/CompleteWork/CompleteWork";
import ArtisticProject from "./components/pages/ArtisticProject/ArtisticProject";
import TheBeginnings from "./components/pages/TheBeginnings/TheBeginnings";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/proyecto-artistico"
            element={<ArtisticProject />}
          ></Route>
          <Route path="/los-inicios" element={<TheBeginnings />}>
            <Route path=":id" element={<TheBeginnings />}></Route>
          </Route>

          <Route index element={<CompleteWork />}></Route>
          <Route path="/obra-completa" element={<CompleteWork />}>
            <Route path=":category" element={<CompleteWork />}>
              <Route path=":subcategory" element={<CompleteWork />}>
                <Route path=":id" element={<CompleteWork />}></Route>
              </Route>
            </Route>
          </Route>

          <Route path="/juan-mayor" element={<About />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
