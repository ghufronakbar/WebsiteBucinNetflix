"use client";

import ModalShowImage from "@/components/ModalShowImage";
import albumImage from "@/data/albumImage";
import Image from "next/image";
import { useState } from "react";

const AlbumSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number>(0);

  const handleOpenModal = (albumIndex: number, imageIndex: number) => {
    setCurrentAlbumIndex(albumIndex);
    setCurrentImageIndex(imageIndex);
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleNextImage = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex < albumImage[currentAlbumIndex].images.length) {
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <>
      <section
        className="flex min-h-screen flex-col items-start text-white"
        id="album"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
          {albumImage.map((album, albumIndex) => (
            <div className="w-full my-10 space-y-2" key={albumIndex}>
              <h2 className="style-sub">{album.title}</h2>
              <div className="horizontal-scroll">
                <div className="container-scroll">
                  {album.images.map((image, imageIndex) => (
                    <Image
                      key={imageIndex}
                      src={image.url}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="hover:opacity-80 transition-all duration-300 object-cover w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-40 aspect-video cursor-pointer"
                      onClick={() => handleOpenModal(albumIndex, imageIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isVisible && (
        <ModalShowImage
          isVisible={isVisible}
          currentImage={currentImageIndex + 1} // Menampilkan nomor gambar yang dimulai dari 1
          totalImage={albumImage[currentAlbumIndex].images.length}
          date={albumImage[currentAlbumIndex].images[currentImageIndex].date}
          image={albumImage[currentAlbumIndex].images[currentImageIndex].url}
          imageDescription={
            albumImage[currentAlbumIndex].images[currentImageIndex].description
          }
          albumDescription={albumImage[currentAlbumIndex].description}
          titleImage={
            albumImage[currentAlbumIndex].images[currentImageIndex].title
          }
          albumSection={albumImage[currentAlbumIndex].title}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
};

export default AlbumSection;
