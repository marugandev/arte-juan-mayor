import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const baseLocation = location.pathname.replace("/", "");

  return {
    baseLocation,
    category: queryParams.get("category"),
    subcategory: queryParams.get("subcategory"),
    imageId: queryParams.get("id")
  };
};
