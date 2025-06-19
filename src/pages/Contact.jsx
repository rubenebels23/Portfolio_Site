import { motion } from "framer-motion";
// import AnimatedSection from "./AnimatedSection";

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

        <form
          action="https://formspree.io/f/xanjbben"
          method="POST"
          className="space-y-4"
        >
          <label className="block text-left text-slate-200">
            Your email:
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-3 rounded-lg bg-neutral-800 text-white placeholder-slate-400 focus:outline-none"
            />
          </label>
          <label className="block text-left text-slate-200">
            Your message:
            <textarea
              name="message"
              required
              rows="4"
              className="w-full mt-1 p-3 rounded-lg bg-neutral-800 text-white placeholder-slate-400 focus:outline-none"
            />
          </label>
          {/* You can add more fields here if needed */}
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Send
          </button>
        </form>
      </div>
    </motion.section>
  );
}