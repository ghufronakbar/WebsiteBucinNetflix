import video from "@/data/video";
import Image from "next/image";

const NoteSection = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-start text-white"
      id="note"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
        <h2 className="style-sub">Notes</h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-8">
          <p className="style-content w-full md:w-1/2">
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
            {video.subtitle}
          </p>
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={1200}
            height={676}
            className="w-full md:w-1/2 h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NoteSection;
