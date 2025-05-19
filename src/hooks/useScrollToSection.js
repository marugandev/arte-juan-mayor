import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useQueryParams } from "./useQueryParams";

export const useScrollToSection = () => {
  const location = useLocation();
  const { baseLocation, category, subcategory, imageId } = useQueryParams();

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current && location.pathname === "/") {
      hasMounted.current = true;
      return;
    }

    hasMounted.current = true;

    const elementId = subcategory || category || baseLocation;

    if (!elementId) return;

    const timeout = setTimeout(() => {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView();
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname, category, subcategory, imageId]);
};
