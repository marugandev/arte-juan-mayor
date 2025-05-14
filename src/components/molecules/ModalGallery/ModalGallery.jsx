import "./ModalGallery.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalGallery = ({
  closeModal,
  images,
  currentImageId,
  setCurrentImageId
}) => {
  const navigate = useNavigate();

  const image = images.find((img) => img.id === currentImageId);
  if (!image) return null;
  const { src, alt = "painting" } = image;

  const goToIndex = (index, e) => {
    e?.stopPropagation();

    setCurrentImageId(images[index].id);

    const currentImage = images[index];

    const { category, subCategory, id } = currentImage;

    if (subCategory) {
      navigate(`?category=${category}&subcategory=${subCategory}&id=${id}`);
    } else if (category) {
      navigate(`?category=${category}&id=${id}`);
    } else {
      navigate(`?id=${id}`);
    }
  };

  const goPrev = (e) => {
    const prevIndex = images.findIndex((img) => img.id === currentImageId) - 1;
    goToIndex(prevIndex < 0 ? images.length - 1 : prevIndex, e);
  };

  const goNext = (e) => {
    const nextIndex = images.findIndex((img) => img.id === currentImageId) + 1;
    goToIndex(nextIndex >= images.length ? 0 : nextIndex, e);
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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImageId]);

  return (
    <div className="modal-gallery overlay">
      <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="modal-button close" onClick={closeModal}>
          Cerrar
        </button>
        <div className="modal-controls">
          <button className="modal-button prev" onClick={goPrev}>
            ← Anterior
          </button>
          <button className="modal-button next" onClick={goNext}>
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
