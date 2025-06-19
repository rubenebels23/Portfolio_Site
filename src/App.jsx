import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import "./index.css";

// Lazy load Projects
const Projects = lazy(() => import("./pages/Projects"));

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-center py-20">Loading Projects...</div>}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
