import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-900 via-purple-700 to-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
