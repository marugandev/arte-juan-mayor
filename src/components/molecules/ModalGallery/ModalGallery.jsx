import "./ModalGallery.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalGallery = ({
  closeModal,
  images,
  currentIndex,
  setCurrentIndex,
  routeBase
}) => {
  const navigate = useNavigate();
  const image = images[currentIndex];
  const { src, alt = "painting" } = image;

  const goPrev = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    navigate(`${routeBase}/${images[newIndex].id}`);
  };

  const goNext = (e) => {
    e.stopPropagation();
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    navigate(`${routeBase}/${images[newIndex].id}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goPrev(e);
      } else if (e.key === "ArrowRight") {
        goNext(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, closeModal]);

  return (
    <div className="modal-gallery overlay">
      <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="modal-button close" onClick={closeModal}>
          Cerrar
        </button>
        <div className="modal-controls">
          <button
            className="modal-button prev"
            onClick={goPrev}
            aria-label="Imagen anterior"
          >
            <span className="arrow">←</span>
            <span className="text">Anterior</span>
          </button>
          <button
            className="modal-button next"
            onClick={goNext}
            aria-label="Imagen siguiente"
          >
            <span className="text">Siguiente</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
