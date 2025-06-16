export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-6 text-center">
      <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Ruben's Portfolio</p>
    </footer>
  );
}
