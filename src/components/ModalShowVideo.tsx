"use client";

import video from "@/data/video";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";

interface ModalShowVideoProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalShowVideo = ({
  isVisible,
  onClose,
}: ModalShowVideoProps) => {
  return (
    <div
      className={`${isVisible ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-all duration-300 backdrop-blur-sm z-50`}
      onClick={onClose}
    >
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 h-5/6 bg-black scroll-y-hidden rounded-lg overflow-x-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full aspect-video relative">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
          <h2 className="style-title absolute bottom-16 md:bottom-18 lg:bottom-20 left-8">{video.title}</h2>
          <div className=" w-7 h-7 lg:w-9 lg:h-9 absolute top-4 right-4 lg:top-6 lg:right-8 cursor-pointer bg-black rounded-full p-2"
          onClick={onClose}>
          <AiOutlineClose className="w-full h-full text-white" />
          </div>
          <button className="absolute bottom-6 left-8  bg-white text-black font-semibold px-4 py-2 flex items-center gap-2 rounded-md hover:bg-primary hover:text-white transition-all duration-300 text-xs md:text-base">
            <IoMdPlay />
            Play
          </button>
        </div>
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-6 flex flex-row gap-4 md:gap-6 lg:gap-8 items-start">
          <div className="w-2/3 flex flex-col items-start">
            <div className="w-full flex flex-row items-center gap-2">
              <p className="style-child">{video.year}</p>
              <p className="style-child">{video.duration}</p>
              <div className="border border-lightGray px-2 rounded-sm">
                <p className="!text-xs style-child">{video.quality}</p>
              </div>
            </div>
            <div className="border border-lightGray px-2 rounded-sm">
              <p className="!text-sm style-child">{video.rated}</p>
            </div>
            <p className="style-content mt-4 !text-start">
              {video.description}
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-start gap-4">
            
            <p className="style-content !text-lightGray !tracking-widest !text-start">Cast:{" "}
            {video.casts.map((item, index) => <span className="text-white" key={index}>{item+ (index < video.casts.length - 1 ? ", " : " ")}</span>)}
            </p>
            <p className="style-content !text-lightGray !tracking-widest !text-start">Genres:{" "}
            {video.genres.map((item, index) => <span className="text-white" key={index}>{item+ (index < video.casts.length - 1 ? ", " : " ")}</span>)}
            </p>
            <p className="style-content !text-lightGray !tracking-widest !text-start">This movie is:{" "}
            {video.types.map((item, index) => <span className="text-white" key={index}>{item+ (index < video.casts.length - 1 ? ", " : " ")}</span>)}
            </p>
            </div>          
        </div>
      </div>
    </div>
  );
};

export default ModalShowVideo;
