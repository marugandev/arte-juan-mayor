import "./PaintingGallery.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PaintingCard from "../../molecules/PaintingCard/PaintingCard";
import ModalGallery from "../../molecules/ModalGallery/ModalGallery";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { useModalGallery } from "../../../context/ModalGalleryContext";

const PaintingGallery = ({ images, routeBase, allVisibleImages }) => {
  const { imageId } = useQueryParams();
  const navigate = useNavigate();

  const {
    isModalOpen,
    modalImages,
    currentIndex,
    setCurrentIndex,
    openModal,
    closeModal
  } = useModalGallery();

  const visibleImages = allVisibleImages || images;
  console.log("visibleImages", visibleImages);

  const handleImageClick = (clickedImageId) => {
    const index = visibleImages.findIndex((img) => img.id === clickedImageId);
    console.log("indexCLICK", index);

    if (index === -1) return;

    openModal(visibleImages, index);
    navigate(`${routeBase}&id=${clickedImageId}`);
  };

  const handleCloseModal = () => {
    closeModal();
    navigate(routeBase);
  };

  useEffect(() => {
    if (imageId) {
      const index = visibleImages.findIndex((img) => img.id === imageId);
      if (index !== -1) {
        openModal(visibleImages, index);
      }
    }
  }, [imageId, visibleImages]);

  return (
    <section className="painting-gallery">
      {images?.map((image) => (
        <PaintingCard
          key={image.id}
          image={image}
          onClick={() => handleImageClick(image.id)}
        />
      ))}

      {isModalOpen && currentIndex !== null && (
        <ModalGallery
          closeModal={handleCloseModal}
          images={modalImages}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          routeBase={routeBase}
        />
      )}
    </section>
  );
};

export default PaintingGallery;
