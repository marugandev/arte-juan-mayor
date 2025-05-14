import "./PaintingGallery.css";

import { useQueryParams } from "../../../hooks/useQueryParams";
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { completeWorkData } from "../../../data/completeWorkData";
import { theBeginningsData } from "../../../data/theBeginningsData";
import { useVisibleImages } from "../../../hooks/useVisibleImages";
import PaintingCard from "../../molecules/PaintingCard/PaintingCard";
import ModalGallery from "../../molecules/ModalGallery/ModalGallery";

const PaintingGallery = ({ images }) => {
  const { baseLocation, category, imageId } = useQueryParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(null);

  const data =
    baseLocation === "obra-completa" ? completeWorkData : theBeginningsData;

  const allModalImages =
    baseLocation === "obra-completa" || baseLocation === "los-inicios"
      ? useVisibleImages(data, null, null)
      : useVisibleImages(data, category, null);

  const openModal = (imageId) => {
    setCurrentImageId(imageId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageId(null);
  };

  const handleImageClick = useCallback(
    (clickedImageId) => {
      const clickedImage = allModalImages.find(
        (img) => img.id === clickedImageId
      );
      if (!clickedImage) return;

      const { category, subCategory } = clickedImage;

      openModal(clickedImageId);

      if (subCategory) {
        navigate(
          `?category=${category}&subcategory=${subCategory}&id=${clickedImageId}`
        );
      } else if (category) {
        navigate(`?category=${category}&id=${clickedImageId}`);
      } else {
        navigate(`?id=${clickedImageId}`);
      }
    },
    [allModalImages, navigate]
  );

  const handleCloseModal = () => {
    closeModal();
    const clickedImage = allModalImages.find(
      (img) => img.id === currentImageId
    );
    if (clickedImage) {
      const { category, subCategory } = clickedImage;
      if (subCategory) {
        navigate(`?category=${category}&subcategory=${subCategory}`);
      } else if (category) {
        navigate(`?category=${category}`);
      } else {
        navigate(`/${baseLocation}`);
      }
    }
  };

  useEffect(() => {
    setModalImages(allModalImages);
  }, [allModalImages]);

  useEffect(() => {
    if (imageId) {
      const foundImage = allModalImages.find((img) => img.id === imageId);
      if (foundImage) {
        openModal(imageId);
      }
    }
  }, [imageId, allModalImages]);

  return (
    <section className="painting-gallery">
      {images?.map((image) => (
        <PaintingCard
          key={image.id}
          image={image}
          onClick={() => handleImageClick(image.id)}
        />
      ))}
      {isModalOpen && currentImageId !== null && (
        <ModalGallery
          closeModal={handleCloseModal}
          images={baseLocation === "obra-completa" ? modalImages : images}
          currentImageId={currentImageId}
          setCurrentImageId={setCurrentImageId}
        />
      )}
    </section>
  );
};

export default PaintingGallery;
