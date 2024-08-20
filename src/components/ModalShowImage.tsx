import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
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
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-all duration-300 backdrop-blur-sm z-50`}
      onClick={onClose}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 h-5/6 bg-black scroll-y-hidden rounded-lg overflow-x-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="w-full aspect-video relative">
          <Image
            src={image}
            alt={titleImage}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
          <div className=" w-7 h-7 lg:w-9 lg:h-9 absolute top-4 right-4 lg:top-6 lg:right-8 cursor-pointer bg-black rounded-full p-2"
          onClick={onClose}>
          <AiOutlineClose className="w-full h-full text-white" />
          </div>
          {currentImage > 1 && (
            <MdNavigateNext
              className="absolute top-1/2 left-0 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-2xl rotate-180"
              onClick={(e) => {
                e.stopPropagation(); 
                if (onPrev) onPrev();
              }}
            />
          )}
          {currentImage < totalImage && (
            <MdNavigateNext
              className="absolute top-1/2 right-0 -translate-y-1/2 text-white text-5xl cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-2xl"
              onClick={(e) => {
                e.stopPropagation(); 
                if (onNext) onNext();
              }}
            />
          )}
        </div>
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-6 flex flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default ModalShowImage;
