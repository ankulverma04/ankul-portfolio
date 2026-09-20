import { useEffect, useRef, useState } from "react";
import resumeUrl from "../assets/MRESUME.pdf";
import darkImg from "../assets/close-black.png";
import lightImg from "../assets/close-white.png";
import darkImg1 from "../assets/hamburgerdark.png";
import lightImg2 from "../assets/hamburgerlight.png";
import img2 from "../assets/moon_icon.png";
import img3 from "../assets/sun_icon.png";
import img4 from "../assets/arrow-icon.png";
import img5 from "../assets/arrow-icon-dark.png";
import downloadIcon from "../assets/download-icon.png";

export default function Navbar() {
  const navRef = useRef();
  const sideMenuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = menuOpen
        ? "translateX(0)"
        : "translateX(100%)";
    }

    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navRef.current?.classList.add(
          "bg-white",
          "bg-opacity-60",
          "backdrop-blur-lg",
          "shadow-md",
          "dark:bg-darkTheme"
        );
      } else {
        navRef.current?.classList.remove(
          "bg-white",
          "bg-opacity-60",
          "backdrop-blur-lg",
          "shadow-md",
          "dark:bg-darkTheme"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-5 xl:px-[8%] py-4 flex items-center justify-between transition-all duration-300"
    >
      <a href="#top" className="text-[32px] md:text-[40px] cursor-pointer leading-none">
        Ankul Verma
      </a>

      <ul className="hidden xl:flex items-center gap-8 px-12 py-3 rounded-full bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/30 dark:bg-transparent">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button type="button" onClick={toggleTheme} aria-label="Toggle theme">
          <img src={img2} alt="" className="w-5 dark:hidden" />
          <img src={img3} alt="" className="w-5 hidden dark:block" />
        </button>

        <a
          href={resumeUrl}
          download="Ankul_Verma_Resume.pdf"
          className="hidden xl:flex items-center gap-2 px-5 py-1.5 border rounded-full hover:bg-slate-100/70 dark:hover:bg-darkHover dark:border-white/30 transition"
        >
          Resume
          <img src={downloadIcon} alt="" className="w-3" />
        </a>

        <a
          href="#contact"
          className="hidden xl:flex items-center gap-3 px-8 py-1.5 border rounded-full hover:bg-slate-100/70 dark:hover:bg-darkHover dark:border-white/30 transition"
        >
          Contact
          <img src={img4} alt="" className="w-3 dark:hidden" />
          <img src={img5} alt="" className="w-3 hidden dark:block" />
        </a>

        <button
          type="button"
          className="block xl:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <img src={darkImg1} alt="" className="w-6 dark:hidden" />
          <img src={lightImg2} alt="" className="w-6 hidden dark:block" />
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 xl:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 h-screen w-72 md:w-64 bg-rose-50 dark:bg-darkHover dark:text-white flex flex-col gap-6 py-20 px-10 transition-transform duration-500 translate-x-full z-10"
      >
        <button
          type="button"
          className="absolute right-6 top-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <img src={darkImg} alt="" className="w-5 dark:hidden" />
          <img src={lightImg} alt="" className="w-5 hidden dark:block" />
        </button>

        <a href="#top" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About me
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          My Work
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
        <a
          href={resumeUrl}
          download="Ankul_Verma_Resume.pdf"
          onClick={() => setMenuOpen(false)}
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
