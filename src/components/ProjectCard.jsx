export function ProjectCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-6 text-white border border-purple-400/20 hover:border-purple-500 transition-all hover:scale-105 shadow-xl">
      <h3 className="text-2xl font-bold mb-2 text-purple-100">{title}</h3>
      <p className="text-purple-300">{description}</p>
    </div>
  );
}