import "./CompleteWork.css";
import GallerySectionLayout from "../../templates/GallerySectionLayout";
import { useFilteredCompleteWorkData } from "../../../hooks/useFilteredCompleteWorkData";

const CompleteWork = () => {
  const { category, subcategory, filteredCategories, visibleImages } =
    useFilteredCompleteWorkData();
  console.log("filteredCategoriesInCompleteWork", filteredCategories);
  console.log("visibleImagesInCompleteWork", visibleImages);

  return (
    <section id="obra-completa" className="site-complete-work">
      {!category && !subcategory && <h2>La obra completa</h2>}

      {filteredCategories.map((cat) => (
        <GallerySectionLayout
          key={cat.id}
          id={`images-${cat.slug}`}
          className={`category-${cat.slug}`}
          title={cat.title}
          description={cat.description}
          note={cat.subcategories?.length === 0}
          images={cat.images}
          routeBase={`/obra-completa?category=${cat.category}`}
          allVisibleImages={visibleImages}
        >
          {cat.subcategories?.map((sub) => (
            <GallerySectionLayout
              key={sub.id}
              id={`images-${sub.slug}`}
              className={`subcategory-${sub.slug}`}
              subtitle={sub.title}
              description={sub.description}
              note
              images={sub.images}
              routeBase={`/obra-completa?category=${cat.category}&subcategory=${sub.subCategory}`}
              allVisibleImages={visibleImages}
            />
          ))}
        </GallerySectionLayout>
      ))}
    </section>
  );
};

export default CompleteWork;
