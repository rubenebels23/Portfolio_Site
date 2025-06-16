// src/App.jsx
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}