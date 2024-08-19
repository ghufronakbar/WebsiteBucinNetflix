import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AlbumSection from "@/sections/AlbumSection";
import HomeSection from "@/sections/HomeSection";
import NoteSection from "@/sections/NoteSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AlbumSection />
      <NoteSection />      
      <Footer />
    </>
  );
}

