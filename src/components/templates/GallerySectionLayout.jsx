import Note from "../atoms/Note/Note";
import PaintingGallery from "../organisms/PaintingGallery/PaintingGallery";

const GallerySectionLayout = ({
  id,
  className,
  title,
  subtitle,
  description,
  note,
  images,
  routeBase,
  allVisibleImages,
  children
}) => {
  console.log("imagesInSectionLayout", images);
  console.log("allimagesInSectionLayout", allVisibleImages);

  return (
    <article id={id} className={`gallery-section-layout ${className || ""}`}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <p>{description}</p>}
      {note && <Note />}
      {images?.length > 0 && (
        <PaintingGallery
          images={images}
          routeBase={routeBase}
          allVisibleImages={allVisibleImages}
        />
      )}
      {children}
    </article>
  );
};

export default GallerySectionLayout;
