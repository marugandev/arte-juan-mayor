import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModalGalleryProvider } from "./context/ModalGalleryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModalGalleryProvider>
        <App />
      </ModalGalleryProvider>
    </BrowserRouter>
  </StrictMode>
);
