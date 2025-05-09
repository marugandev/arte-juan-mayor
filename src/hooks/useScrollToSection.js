import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const pathSections = location.pathname.split("/");
      const sectionId = pathSections[pathSections.length - 1];

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView();
      }
    };

    scrollToSection();
  }, [location]);
};
