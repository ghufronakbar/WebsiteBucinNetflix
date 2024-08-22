"use client";

import ModalShowVideo from "@/components/ModalShowVideo";
import video from "@/data/video";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMdInformationCircleOutline, IoMdPlay } from "react-icons/io";
import LoadingComponent from "@/components/LoadingComponent"; 
import { useRouter } from "next/navigation";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const router = useRouter();

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setIsPlaying(false);
        router.push("/video");
      }, 5000); 
    }, 1000); 
  };

  return (
    <>
    <section
      className={`flex min-h-screen flex-col items-start justify-end text-white ${
        isPlaying ? "opacity-0 transition-opacity duration-1000" : "opacity-100"
      }`}
      id="home"
    >
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={1200}
        height={676}
        className="absolute left-0 top-0 w-screen h-screen object-cover -z-50"
      />
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 pb-36 w-full sm:w-2/3 lg:w-1/2 space-y-4">
        <h1 className="style-title">{video.title}</h1>
        <p className="style-content">{video.subtitle}</p>
        <p className="style-content">
          Click &quot;Play&quot; to watch the video
        </p>
        <div className="w-full flex flex-row items-start gap-4">
          <button
            className="bg-white text-black font-semibold px-4 py-2 flex items-center gap-2 rounded-md hover:bg-primary hover:text-white transition-all duration-300"
            onClick={handlePlayClick}
          >
            <IoMdPlay />
            Play
          </button>
          <button
            className="bg-lightGray text-white font-semibold px-4 py-2 flex items-center gap-2 rounded-md bg-opacity-40 hover:bg-opacity-80 transition-all duration-300"
            onClick={() => setIsVisible(true)}
          >
            <IoMdInformationCircleOutline />
            Details
          </button>
        </div>
      </div>
      <ModalShowVideo
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        onPlayClick={handlePlayClick}
      />
    </section>
      {showLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <LoadingComponent />
        </div>
      )}
    </>
  );
};

export default HomeSection;
