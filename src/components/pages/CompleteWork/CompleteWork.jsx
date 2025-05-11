import "./CompleteWork.css";

import { useLocation } from "react-router-dom";
import { completeWorkData } from "../../../data/completeWorkData";
import GallerySectionLayout from "../../templates/GallerySectionLayout";

const CompleteWork = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const paramCategory = queryParams.get("category");
  const paramSub = queryParams.get("subcategory");

  /*   const filteredData = paramCategory
    ? completeWorkData
        .filter((cat) => cat.slug === paramCategory)
        .map((cat) => ({
          ...cat,
          subcategories: paramSub
            ? cat.subcategories?.filter((sub) => sub.slug === paramSub)
            : cat.subcategories
        }))
    : completeWorkData; */

   const allImages = [];
  console.log("alls", allImages);

  completeWorkData.forEach((cat) => {
    if (!paramCategory || cat.slug === paramCategory) {
      if (cat.images) {
        allImages.push(...cat.images);
      }
      if (cat.subcategories) {
        cat.subcategories.forEach((sub) => {
          if (!paramSub || sub.slug === paramSub) {
            if (sub.images) {
              allImages.push(...sub.images);
            }
          }
        });
      }
    }
  });

  return (
    <section id="obra-completa" className="site-complete-work">
      {!paramCategory && !paramSub && <h2>La obra completa</h2>}
      {completeWorkData.map((category) => (
        <section
          id={category.slug}
          key={category.id}
          className={`category-${category.slug}`}
        >
          <h2>{category.title}</h2>
          {category.description && <p>{category.description}</p>}
          {category.images?.length > 0 && (
            <GallerySectionLayout
              className={`category-images-${category.slug}`}
              note
              images={category.images}
              routeBase={category.path}
              allVisibleImages={allImages}
            />
          )}
          {category.subcategories?.map(
            ({ id, slug, title, description, images, subCategory }) => (
              <GallerySectionLayout
                id={slug}
                key={id}
                className={`subcategory-${slug}`}
                subtitle={title}
                description={description}
                note
                images={images}
                routeBase={`/obra-completa?category=${category.category}&subcategory=${subCategory}`}
                allVisibleImages={allImages}
              />
            )
          )}
        </section>
      ))}
    </section>
  );
};

export default CompleteWork;
