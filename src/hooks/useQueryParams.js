import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pathname = location.pathname;

  const category = searchParams.get("category") || null;
  const subcategory = searchParams.get("subcategory") || null;
  const imageId = searchParams.get("id") || null;

  const baseLocation = (() => {
    const trimmed = pathname.replace(/^\/+|\/+$/g, "");
    if (!trimmed || trimmed === "") return "obra-completa";
    return trimmed.split("/")[0];
  })();

  return {
    category,
    subcategory,
    imageId,
    baseLocation
  };
};
