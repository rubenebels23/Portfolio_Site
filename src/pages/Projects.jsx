// src/pages/Projects.jsx

import { motion } from "framer-motion";


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
          <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Cool App</h3>
            <p className="text-slate-300">A project using React and TailwindCSS with animations and dark mode.</p>
          </div>
          <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Magic Website</h3>
            <p className="text-slate-300">My personal blog & portfolio built with React and Vite.</p>
          </div>
                    <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Magic Website</h3>
            <p className="text-slate-300">My personal blog & portfolio built with React and Vite.</p>
          </div>
                    <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Magic Website</h3>
            <p className="text-slate-300">My personal blog & portfolio built with React and Vite.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
