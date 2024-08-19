import Navbar from "@/components/Navbar";
import albumImage from "@/data/albumImage";
import video from "@/data/video";
import Image from "next/image";
import { IoMdInformationCircleOutline, IoMdPlay } from "react-icons/io";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <section className="flex min-h-screen flex-col items-start justify-end text-white" id="home">
        <Image src={video.thumbnail} alt={video.title} width={1200} height={676} className="absolute left-0 top-0 w-screen h-screen object-cover -z-50" />
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 pb-36 w-full sm:w-2/3 lg:w-1/2 space-y-4">
          <h1 className="style-title">{video.title}</h1>
          <p className="style-content">{video.subtitle}</p>
          <p className="style-content">Click &quot;Play&quot; to watch the video</p>
          <div className="w-full flex flex-row items-start gap-4">
            <button className="bg-white text-black font-semibold px-4 py-2 flex items-center gap-2 rounded-md hover:bg-primary hover:text-white transition-all duration-300">
              <IoMdPlay />
              Play</button>
            <button className="bg-lightGray text-white font-semibold px-4 py-2 flex items-center gap-2 rounded-md bg-opacity-40 hover:bg-opacity-80 transition-all duration-300">
              <IoMdInformationCircleOutline />
              Details</button>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-start text-white" id="album">
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
          {albumImage.map((album, index) => (            
          <div className="w-full my-10 space-y-2" key={index}>
            <h2 className="style-sub">{album.title}</h2>
            <div className="horizontal-scroll">
            <div className="container-scroll">
              {album.images.map((image, index) => (                
              <Image src={image.url} alt={image.title} width={1200} height={676} className="hover:opacity-80 transition-all duration-300 object-cover w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-40 aspect-video cursor-pointer" key={index} />  
              ))}
            </div>
            </div>
          </div>
          ))}
        </div>
      </section>
      <section className="flex min-h-screen flex-col items-start text-white" id="note">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
        <h2 className="style-sub">Notes</h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-8">
        <p className="style-content w-full md:w-1/2">{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}{video.subtitle}</p>
        <Image src={video.thumbnail} alt={video.title} width={1200} height={676} className="w-full md:w-1/2 h-96 object-cover" />
        </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-black text-white h-44 flex items-center justify-center">
        <p className="text-sm">&copy;  2023 - 2024, Goddess Rockstar 2112</p>
      </footer>
    </>
  );
}
