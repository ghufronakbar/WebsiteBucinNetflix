import albumImage from "@/data/albumImage";
import Image from "next/image";

const AlbumSection = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-start text-white "
      id="album"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
        {albumImage.map((album, index) => (
          <div className="w-full my-10 space-y-2" key={index}>
            <h2 className="style-sub">{album.title}</h2>
            <div className="horizontal-scroll">
              <div className="container-scroll">
                {album.images.map((image, index) => (
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="hover:opacity-80 transition-all duration-300 object-cover w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-40 aspect-video cursor-pointer"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumSection;
