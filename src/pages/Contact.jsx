// src/pages/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-gradient-to-b from-indigo-900 to-neutral-900 text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">📬 Contact</h2>
        <p className="text-slate-300 mb-8">Interested in working together? Fill out the form below.</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-slate-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-slate-400 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
