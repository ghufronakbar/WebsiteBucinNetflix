'use client'; 

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import profile from "@/data/profile";
import Search from "./Search";

const NavMobile = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navItem.map(item => document.getElementById(item.section));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full h-16 fixed text-white transition-all duration-700 ${
          scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 flex flex-row items-center justify-between h-full">
          <h1 className="text-2xl font-bold text-primary mr-8 drop-shadow-2xl">
            Story of Us
          </h1>
          <div className="flex items-center gap-4">
            <IoSearch onClick={() => setIsVisible(true)} />
            <select
              className="bg-transparent text-white outline-none text-sm cursor-pointer text-center"
              value={activeSection}
              id="nav-select"
              onChange={(e) => {
                const sectionId = e.target.value;
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {navItem.map((item) => (
                <option key={item.section} value={item.section} className="text-black">
                  {item.title}
                </option>
              ))}
            </select>
            <p className="hidden text-sm cursor-pointer">{profile.name}</p>
            <Image
              src={profile.picture}
              alt="profile"
              width={40}
              height={40}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <Search isVisible={isVisible} onClose={() => setIsVisible(false)}/>
    </nav>
  );
};

const NavDekstop = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navItem.map(item => document.getElementById(item.section));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full h-16 fixed text-white transition-all duration-700 ${
          scrolled ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'
        }`}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 flex flex-row items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-bold text-primary mr-8">
              Story of Us
            </h1>
            {navItem.map((item) => (
              <p
                key={item.section}
                className={`text-sm cursor-pointer ${activeSection === item.section ? 'glow' : ''}`}
                onClick={() => {
                  document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <IoSearch className="cursor-pointer" onClick={() => setIsVisible(true)}/>
            <p className="text-sm">{profile.name}</p>
            <Image
              src={profile.picture}
              alt="profile"
              width={40}
              height={40}
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <Search isVisible={isVisible} onClose={() => setIsVisible(false)}/>
    </nav>
  );
};



const Navbar = () => {
  return (
    <>
      <div className="hidden md:block">
        <NavDekstop />
      </div>
      <div className="block md:hidden">
        <NavMobile />
      </div>
    </>
  );
};

interface NavItem {
  title: string;
  section: string;
}

const navItem: NavItem[] = [
  {
    title: "Home",
    section: "home",
  },
  {
    title: "Album",
    section: "album",
  },
  {
    title: "Note",
    section: "note",
  },
];

export default Navbar;
