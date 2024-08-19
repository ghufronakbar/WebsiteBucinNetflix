import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";

interface ModalShowImageProps {
  albumSection: string;
  albumDescription: string;
  image: string;
  imageDescription: string;
  date: string;
  titleImage: string;
  totalImage: number;
  currentImage: number;
  isVisible?: boolean;
  onClose?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const ModalShowImage = ({
  albumSection: titleSection,
  albumDescription: sectionDescription,
  imageDescription,
  image,
  date,
  titleImage,
  totalImage,
  currentImage,
  isVisible,
  onClose,
  onPrev,
  onNext,
}: ModalShowImageProps) => {
  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-all duration-300 backdrop-blur-sm`}
      onClick={onClose}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 h-5/6 bg-black scroll-y-hidden"
        onClick={(e) => e.stopPropagation()} // Ini menghentikan klik di dalam modal agar tidak menutup modal
      >
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt={titleImage}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
          {currentImage > 1 && (
            <MdNavigateNext
              className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-2xl rotate-180"
              onClick={(e) => {
                e.stopPropagation(); // Hentikan propagasi event klik
                if (onPrev) onPrev();
              }}
            />
          )}
          {currentImage < totalImage && (
            <MdNavigateNext
              className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-2xl"
              onClick={(e) => {
                e.stopPropagation(); // Hentikan propagasi event klik
                if (onNext) onNext();
              }}
            />
          )}
        </div>
        <div className="px-4 pt-4 flex flex-col">
          <h2 className="style-sub">{titleSection}</h2>
          <p className="style-child">
            {titleImage} 
          </p>        
          {currentImage === 1 ? (
            <p className="style-content mt-2">
              Introduction - {sectionDescription}
            </p>
          ) : null}
          <p className="style-content mt-2">{imageDescription}</p>
          <p className="text-xs mt-2 text-lightGray">{date}</p>
          <button
            className="bg-primary text-white font-semibold px-4 py-2 flex items-center gap-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 my-4 self-end"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalShowImage;
