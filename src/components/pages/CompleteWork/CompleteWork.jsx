import "./CompleteWork.css";

import { useQueryParams } from "../../../hooks/useQueryParams";
import { useFilteredCategories } from "../../../hooks/useFilteredCategories";
import { completeWorkData } from "../../../data/completeWorkData";
import GallerySectionLayout from "../../templates/GallerySectionLayout";

const CompleteWork = () => {
  const { category, subcategory } = useQueryParams();
  const filteredCategories = useFilteredCategories(completeWorkData);

  return (
    <section id="obra-completa" className="site-complete-work">
      {!category && !subcategory && <h2>La obra completa</h2>}

      {filteredCategories.map((cat) => (
        <GallerySectionLayout
          key={cat.id}
          id={`${cat.slug}`}
          className={`category-${cat.slug}`}
          title={cat.title}
          description={cat.description}
          note={cat.subcategories?.length === 0}
          images={cat.images}
        >
          {cat.subcategories?.map((sub) => (
            <GallerySectionLayout
              key={sub.id}
              id={`${sub.slug}`}
              className={`subcategory-${sub.slug}`}
              subtitle={sub.title}
              description={sub.description}
              note
              images={sub.images}
            />
          ))}
        </GallerySectionLayout>
      ))}
    </section>
  );
};

export default CompleteWork;
