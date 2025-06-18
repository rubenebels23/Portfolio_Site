// src/components/ProjectCard.jsx
export default function ProjectCard({ title, image, description, github, zip, video }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-4 space-y-4 hover:shadow-2xl transition">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="rounded-xl object-cover w-full h-48"
      />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
      <div className="flex space-x-4 mt-2">
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
    </div>
  );
}
