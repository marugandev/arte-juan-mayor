import { useMemo } from "react";

export const useVisibleImages = (data, category, subcategory) => {
  return useMemo(() => {
    const visible = [];

    data.forEach((cat) => {
      if (!category || cat.category === category) {
        cat.images?.forEach((img) =>
          visible.push({ ...img, category: cat.category, subCategory: null })
        );

        cat.subcategories?.forEach((sub) => {
          if (!subcategory || sub.subCategory === subcategory) {
            sub.images?.forEach((img) =>
              visible.push({
                ...img,
                category: cat.category,
                subCategory: sub.subCategory
              })
            );
          }
        });
      }
    });

    return visible;
  }, [data, category, subcategory]);
};
