import note from "@/data/note";
import Image from "next/image";

const NoteSection = ({ lang }: { lang: string }) => {
  const n = note({lang})
  return (
    <section
      className="flex min-h-screen flex-col items-start text-white"
      id="note"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 w-full h-full">
        <h2 className="style-sub">{n.title}</h2>
        <div className="w-full flex flex-col md:flex-row items-start gap-8">
          <p
            className="style-content w-full md:w-1/2"
            dangerouslySetInnerHTML={{
              __html: n.description.replace(/\n/g, "<br />"),
            }}
          >            
          </p>
          <Image
            src={n.image}
            alt={n.title}
            width={1200}
            height={676}
            className="w-auto h-full md:w-1/2 md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NoteSection;
