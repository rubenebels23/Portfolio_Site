import { motion } from "framer-motion";

// ✅ Importing images from src/assets
import asianApeHunt from "../assets/chinese.png";
import refund4Life from "../assets/R4L.png";
import horrorTextGame from "../assets/horrorquestions.png";
import textAdventureGame from "../assets/Sewers.png";

// Optional: abstract into ProjectCard.jsx
const ProjectCard = ({ title, image, description, github, zip, video }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-700 rounded-2xl p-4 shadow-lg transition-transform space-y-4"
  >
    <img
      src={image}
      alt={`${title} screenshot`}
      className="rounded-xl object-cover w-full h-48"
    />
    <h3 className="text-2xl font-semibold">{title}</h3>
    <p className="text-slate-300 text-sm">{description}</p>
    <div className="flex space-x-4 pt-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline"
        >
          GitHub
        </a>
      )}
      {zip && (
        <a
          href={zip}
          download
          className="text-sky-400 hover:underline"
        >
          Download ZIP
        </a>
      )}
      {video && (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline"
        >
          Watch Video
        </a>
      )}
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-gradient-to-b from-slate-800 to-indigo-900 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">🚀 Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Asian Ape Hunt"
            image={asianApeHunt}
            description="A 2D pixel shooter built in HTML, CSS, and JavaScript."
            github="https://github.com/yourusername/asian-ape-hunt"
            zip="/projects/asian-ape-hunt.zip"
            video="https://www.youtube.com/watch?v=example"
          />
          <ProjectCard
            title="Refund4Life"
            image={refund4Life}
            description="A simulated refund site where you can buy a game and refund it anytime for free!"
            github="https://github.com/rubenebels23/Keuzedeel_FrontEnd"
            zip="/projects/refund4life.zip"
            video="https://www.youtube.com/watch?v=example"
          />
          <ProjectCard
            title="Horror Text Game"
            image={horrorTextGame}
            description="A horror-style decision game built using vanilla JS."
            github="https://github.com/yourusername/horror-text-game"
            zip="/projects/horror-text-game.zip"
            video="https://www.youtube.com/watch?v=example"
          />
          <ProjectCard
            title="Text Adventure Game"
            image={textAdventureGame}
            description="'The Sewers' is a text-based adventure game where you explore a mysterious underground world."
            github="https://github.com/rubenebels23/Text_Adventure"
            zip="/projects/text-adventure.zip"
            video="https://www.youtube.com/watch?v=example"
          />
        </div>
      </div>
    </motion.section>
  );
}
