import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaReact, FaCss3Alt, FaHtml5, FaInstagram } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import useSoundEffect from "../hooks/useSoundEffect"; // 👈 import hook
import clickSound from "../assets/sounds/click.mp3";  // 👈 import sound

export default function Hero() {
  const playClick = useSoundEffect(clickSound); // 👈 initialize sound

  return (
    <AnimatedSection delay={0.1}>
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-[110vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden"
      >
        <div className="absolute w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[200px] animate-pulse"></div>

        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg mb-4">
          Hello, I'm Ruben!
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-8 z-10">
          I am a first year student at Alfa-College in Groningen specializing in game development. I like creating immersive experiences using Unity and C#.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6 z-10">
          <button
            onClick={() => {
              playClick(); // 👈 play sound
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            🚀 View Projects
          </button>
          <button
            onClick={() => {
              playClick(); // 👈 play sound
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            ✉️ Contact Me
          </button>
        </div>

        <div className="flex gap-6 text-2xl mb-8 z-10">
          <a href="https://github.com/rubenebels23" target="_blank" className="hover:text-sky-400"><FaGithub /></a>
          <a href="https://www.instagram.com/rubenebels/?next=%2F00" target="_blank" className="hover:text-sky-400"><FaInstagram /></a>
          <a href="#contact" className="hover:text-sky-400"><FaEnvelope /></a>
        </div>

        <div className="flex gap-8 text-4xl text-sky-400 opacity-70 z-10">
          <FaReact className="hover:scale-110 transition-transform" />
          <FaHtml5 className="hover:scale-110 transition-transform" />
          <FaCss3Alt className="hover:scale-110 transition-transform" />
        </div>
      </motion.section>
    </AnimatedSection>
  );
}
