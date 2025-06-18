// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-91 backdrop-blur text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-bold text-sky-400">Refund4Life</div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#hero" className="hover:text-sky-300 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-sky-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-300 transition">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-black bg-opacity-80 px-6 pb-6`}>
        <ul className="flex flex-col space-y-4 font-medium">
          <li><a href="#hero" className="hover:text-sky-300 transition" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#projects" className="hover:text-sky-300 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-300 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
