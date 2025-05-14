import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQueryParams } from "./useQueryParams";

export const useScrollToSection = () => {
  const location = useLocation();
  const { baseLocation, category } = useQueryParams();

  useEffect(() => {
    const elementId = category || baseLocation;
    if (!elementId) return;

    const timeout = setTimeout(() => {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname, category]);
};
