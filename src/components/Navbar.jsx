import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["home", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleSmoothScroll(section)}
                className="px-4 py-2 rounded-md hover:bg-white/10 transition backdrop-blur-sm hover:text-sky-300 text-white border border-transparent hover:border-sky-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black bg-opacity-80 px-6 pb-6`}
      >
        <ul className="flex flex-col space-y-4 font-medium">
          {["hero", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleSmoothScroll(section)}
                className="hover:text-sky-300 transition bg-transparent border-none outline-none cursor-pointer w-full text-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
