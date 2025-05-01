import Note from "../atoms/Note/Note";
import PaintingGallery from "../organisms/PaintingGallery/PaintingGallery";

const GallerySectionLayout = ({
  className,
  title,
  subtitle,
  description,
  note,
  images,
  routeBase
}) => {
  return (
    <article className={`gallery-section-layout ${className || ""}`}>
      {title && <h2>{subtitle}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <p>{description}</p>}
      {note && <Note />}
      <PaintingGallery images={images} routeBase={routeBase} />
    </article>
  );
};

export default GallerySectionLayout;
