import { useQueryParams } from "./useQueryParams";
import { useMemo } from "react";

export const useFilteredCategories = (data) => {
  const { category, subcategory } = useQueryParams();

  return useMemo(() => {
    if (!category) return data;
    return data
      .filter((cat) => cat.category === category)
      .map((cat) => ({
        ...cat,
        subcategories: subcategory
          ? cat.subcategories?.filter((sub) => sub.subCategory === subcategory)
          : cat.subcategories || []
      }));
  }, [category, subcategory]);
};
