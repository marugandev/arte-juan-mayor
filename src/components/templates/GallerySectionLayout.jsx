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
  children
}) => {
  return (
    <article id={id} className={`gallery-section-layout ${className || ""}`}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <p>{description}</p>}
      {note && <Note />}
      {images?.length > 0 && <PaintingGallery images={images} />}
      {children}
    </article>
  );
};

export default GallerySectionLayout;
