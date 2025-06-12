export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-60 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-300">MyPortfolio</h1>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}