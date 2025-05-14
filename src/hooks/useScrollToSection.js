import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToSection = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParams = queryParams.get("category");
  /* const subcategoryParams = queryParams.get("subcategory"); */

  useEffect(() => {
    const scrollToSection = () => {
      const el = document.getElementById(categoryParams);
      if (el) {
        el.scrollIntoView();
      }
    };

    scrollToSection();
  }, [location]);
};
