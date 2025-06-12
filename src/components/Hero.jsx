export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text text-transparent mb-4">
        Hi, I'm Alex
      </h2>
      <p className="text-xl text-purple-100 mb-6">
        Frontend Developer & Designer building magical UIs
      </p>
      <a href="#projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg text-lg font-semibold">
        View My Work
      </a>
    </section>
  );
}