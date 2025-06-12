export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl text-black" required />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl text-black" required />
          <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 rounded-xl text-black" required></textarea>
          <button type="submit" className="w-full py-3 bg-purple-600 text-white font-bold rounded-2xl transition hover:scale-105 shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
