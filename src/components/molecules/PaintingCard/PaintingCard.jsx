import "./PaintingCard.css";

const PaintingCard = ({ image, onClick }) => {
  const { src, alt = "painting", title, year, author } = image;

  return (
    <figure className="painting-card" onClick={onClick}>
      <img src={src} alt={alt} loading="lazy" />
      {(title || year || author) && (
        <figcaption className="figcaption">
          {title && <span>{title}</span>}
          {year && <span> ({year})</span>}
          {author && <cite className="cite">— {author}</cite>}
        </figcaption>
      )}
    </figure>
  );
};

export default PaintingCard;
