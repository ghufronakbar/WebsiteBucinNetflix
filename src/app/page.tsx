"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AlbumSection from "@/sections/AlbumSection";
import HomeSection from "@/sections/HomeSection";
import NoteSection from "@/sections/NoteSection";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
    const langStorage = localStorage.getItem("lang");
    setLang(langStorage || "en");
  }, [lang]);
  const handleChangeLang = () => {
    setLang(lang === "en" ? "id" : "en");
    localStorage.setItem("lang", lang === "en" ? "id" : "en");
  };
  return (
    <>
      <Navbar lang={lang} onLangChange={handleChangeLang} />
      <HomeSection lang={lang} />
      <AlbumSection lang={lang} />
      <NoteSection lang={lang} />
      <Footer />
    </>
  );
}
