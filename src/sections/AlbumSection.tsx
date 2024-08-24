"use client";

import ModalShowImage from "@/components/ModalShowImage";
import albumImage from "@/data/albumImage";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AlbumSection = ({ lang }: { lang: string }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState<number>(0);
  const searchTerms = useSearchParams();
  const search: string = searchTerms.get("search") || "";    
  const album = albumImage({ lang });
  

  useEffect(() => {
    if (searchTerms.get("search")) {
      document.getElementById("album")?.scrollIntoView();
    }
  }, [searchTerms]);

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
    if (nextIndex < album[currentAlbumIndex].images.length) {
      setCurrentImageIndex(nextIndex);
    }
  };

  const handlePrevImage = () => {
    const prevIndex = currentImageIndex - 1;
    if (prevIndex >= 0) {
      setCurrentImageIndex(prevIndex);
    }
  };

  const filteredAlbums = album
    .map((album) => {
      if (album.title.toLowerCase().includes(search.toLowerCase())) {
        return album;
      }

      const filteredImages = album.images.filter((image) =>
        image.title.toLowerCase().includes(search.toLowerCase())
      );

      if (filteredImages.length > 0) {
        return {
          ...album,
          images: filteredImages,
        };
      }

      return null;
    })
    .filter((album) => album !== null);

  return (
    <>
      <section
        className="flex min-h-screen flex-col items-start text-white"
        id="album"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
          {filteredAlbums.map((album, albumIndex) => (
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
                      className="hover:opacity-80 hover:z-10 transition-all duration-300 object-cover w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-40 aspect-video cursor-pointer"
                      onClick={() => handleOpenModal(albumIndex, imageIndex)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filteredAlbums.length === 0 && (
            <div className="w-full h-full flex items-center justify-center py-60">
              <h2 className="style-content text-center">
                No result found with keyword <b>&quot;{search}&quot;</b>
              </h2>
            </div>
          )}
        </div>
      </section>

      {isVisible && (
        <ModalShowImage
          isVisible={isVisible}
          currentImage={currentImageIndex + 1}
          totalImage={album[currentAlbumIndex].images.length}
          date={album[currentAlbumIndex].images[currentImageIndex].date}
          image={album[currentAlbumIndex].images[currentImageIndex].url}
          imageDescription={
            album[currentAlbumIndex].images[currentImageIndex].description
          }
          albumDescription={album[currentAlbumIndex].description}
          titleImage={
            album[currentAlbumIndex].images[currentImageIndex].title
          }
          albumSection={album[currentAlbumIndex].title}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
};

export default AlbumSection;
