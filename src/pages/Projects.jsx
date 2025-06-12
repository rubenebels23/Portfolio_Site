export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white text-black">
      <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-6 rounded-xl shadow-lg bg-purple-100 hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Cool App</h4>
          <p className="text-gray-700">A project using React and TailwindCSS.</p>
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-purple-100 hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Magic Website</h4>
          <p className="text-gray-700">My personal blog & portfolio built with React.</p>
        </div>
      </div>
    </section>
  );
}
