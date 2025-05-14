import { useQueryParams } from "./useQueryParams";
import { completeWorkData } from "../data/completeWorkData";

export const useFilteredCompleteWorkData = () => {
  const { category, subcategory, imageId } = useQueryParams();

  const filteredCategories = category
    ? completeWorkData
        .filter((cat) => cat.category === category)
        .map((cat) => ({
          ...cat,
          subcategories: subcategory
            ? cat.subcategories?.filter(
                (sub) => sub.subCategory === subcategory
              )
            : cat.subcategories || []
        }))
    : completeWorkData;

  const visibleImages = [];
  completeWorkData.forEach((cat) => {
    if (!category || cat.category === category) {
      if (cat.images) {
        cat.images.forEach((img) => {
          visibleImages.push({
            ...img,
            category: cat.category,
            subCategory: null
          });
        });
      }
      cat.subcategories?.forEach((sub) => {
        if (!subcategory || sub.subCategory === subcategory) {
          if (sub.images) {
            sub.images.forEach((img) => {
              visibleImages.push({
                ...img,
                category: cat.category,
                subCategory: sub.subCategory
              });
            });
          }
        }
      });
    }
  });

  return {
    category,
    subcategory,
    imageId,
    filteredCategories,
    visibleImages
  };
};
