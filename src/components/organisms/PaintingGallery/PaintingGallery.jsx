import "./PaintingGallery.css";

import PaintingCard from "../../molecules/PaintingCard/PaintingCard";
import ModalGallery from "../../molecules/ModalGallery/ModalGallery";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PaintingGallery = ({ images, routeBase, allVisibleImages }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const modalImages = allVisibleImages || images;

  const openModal = (index) => {
    const imageId = images[index].id;
    const globalIndex = modalImages.findIndex((img) => img.id === imageId);
    setSelectedIndex(globalIndex);
    setModalOpen(true);
    navigate(`${routeBase}/${modalImages[globalIndex].id}`);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate(routeBase);
  };

  useEffect(() => {
    if (id) {
      const foundIndex = modalImages.findIndex((img) => img.id === id);
      if (foundIndex !== -1) {
        setSelectedIndex(foundIndex);
        setModalOpen(true);
      }
    }
  }, [id, modalImages]);

  return (
    <section className="painting-gallery">
      {images.map((image, index) => (
        <PaintingCard
          key={image.id}
          image={image}
          onClick={() => openModal(index)}
        />
      ))}
      {isModalOpen && (
        <ModalGallery
          closeModal={closeModal}
          images={modalImages}
          currentIndex={selectedIndex}
          setCurrentIndex={setSelectedIndex}
          routeBase={routeBase}
        />
      )}
    </section>
  );
};

export default PaintingGallery;
