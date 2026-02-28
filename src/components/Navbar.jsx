import { useEffect, useRef, useState } from "react";

import darkImg from "../assets/close-black.png";
import lightImg from "../assets/close-white.png";
import darkImg1 from "../assets/hamburgerdark.png";
import lightImg2 from "../assets/hamburgerlight.png";
import img2 from "../assets/moon_icon.png";
import img3 from "../assets/sun_icon.png";
import img4 from "../assets/arrow-icon.png";
import img5 from "../assets/arrow-icon-dark.png";

export default function Navbar() {

    const navRef = useRef();
    const sideMenuRef = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    /* ---------- Sidebar Control ---------- */

    useEffect(() => {

        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform =
                menuOpen ? "translateX(0)" : "translateX(100%)";
        }

        document.body.style.overflow = menuOpen ? "hidden" : "auto";

    }, [menuOpen]);

    /* ---------- Scroll Navbar Effect ---------- */

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

    /* ---------- Theme Toggle ---------- */

    const toggleTheme = () => {

        document.documentElement.classList.toggle("dark");

        localStorage.theme =
            document.documentElement.classList.contains("dark")
                ? "dark"
                : "light";
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 px-5 xl:px-[8%] py-4 flex items-center justify-between transition-all duration-300"
        >

            {/* Logo */}
            <h1 className="text-[40px] cursor-pointer dark:hidden">
                Ankul Verma
            </h1>

            <h1 className="text-[40px] cursor-pointer hidden dark:block">
                Ankul Verma
            </h1>

            {/* Desktop Menu (1280+) */}
            <ul className="hidden xl:flex items-center gap-8 px-12 py-3 rounded-full bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/30 dark:bg-transparent">

                <li><a href="#top">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-4">

                <button onClick={toggleTheme}>
                    <img src={img2} className="w-5 dark:hidden" />
                    <img src={img3} className="w-5 hidden dark:block" />
                </button>

                <a href="#contact"
                    className="hidden xl:flex items-center gap-3 px-8 py-1.5 border rounded-full hover:bg-slate-100/70 dark:hover:bg-darkHover dark:border-white/30 transition">
                    Contact
                    <img src={img4} className="w-3 dark:hidden" />
                    <img src={img5} className="w-3 hidden dark:block" />
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="block xl:hidden"
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={darkImg1} className="w-6 dark:hidden" />
                    <img src={lightImg2} className="w-6 hidden dark:block" />
                </button>

            </div>

            {/* Sidebar Menu */}
            <div
                ref={sideMenuRef}
                className="fixed top-0 right-0 h-screen w-72 md:w-64 bg-rose-50 dark:bg-darkHover dark:text-white flex flex-col gap-6 py-20 px-10 transition-transform duration-500 translate-x-full"
            >

                <button className="absolute right-6 top-6" onClick={() => setMenuOpen(false)}>
                    <img src={darkImg} className="w-5 dark:hidden" />
                    <img src={lightImg} className="w-5 hidden dark:block" />
                </button>

                <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#work" onClick={() => setMenuOpen(false)}>My Work</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            </div>

        </nav>
    );
}