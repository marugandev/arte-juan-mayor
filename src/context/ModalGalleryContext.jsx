import { createContext, useContext, useState } from "react";

const ModalGalleryContext = createContext();

export const ModalGalleryProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (images, index) => {
    setModalOpen(true);
    setModalImages(images);
    setCurrentIndex(index);
    console.log("index", index);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
    setCurrentIndex(null);
  };

  return (
    <ModalGalleryContext.Provider
      value={{
        isModalOpen,
        modalImages,
        currentIndex,
        setCurrentIndex,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalGalleryContext.Provider>
  );
};

export const useModalGallery = () => useContext(ModalGalleryContext);
