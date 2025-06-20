import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import useSoundEffect from "../hooks/useSoundEffect";
import useLoopingSound from "../hooks/useLoopingSound";
import clickSound from "../assets/sounds/click.mp3";
import typingSound from "../assets/sounds/typing.mp3";

const responses = {
  hello:
    "Hi there! 👋 I'm your personal assistant. Ask me anything about this portfolio. your keywords are: hello, stack, projects, resume.",
  stack: "This portfolio is built with React and Tailwind CSS.",
  projects:
    "There are several cool projects! Scroll down or ask about a specific one.",
  resume: "You can download my resume at the top or in the contact section.",
  default:
    "I'm still learning! Try asking about the tech stack, projects, or resume.",
};

export default function Chatbot() {
  const playClick = useSoundEffect(clickSound);
  const { start: playTyping } = useLoopingSound(typingSound);
  const [isTyping, setIsTyping] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! Ask me anything about this site or my work. These are your keywords: hello, stack, projects, resume.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    playClick();

    const userMessage = { from: "user", text: input };
    const key = input.toLowerCase().trim();
    const botReply = responses[key] || responses["default"];
    const botMessage = { from: "bot", text: botReply };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true); // 👈 show typing indicator

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false); // 👈 hide after bot "responds"
    }, 1000); // you can adjust the delay
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => {
            playClick();
            setIsOpen(true);
          }}
          className="bg-sky-500 p-4 rounded-full shadow-lg text-white hover:bg-sky-600 transition"
        >
          <FaComments size={20} />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-2xl w-80 max-h-[70vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-sky-500 text-white px-4 py-3">
            <span>AI Assistant</span>
            <button
              onClick={() => {
                playClick();
                setIsOpen(false);
              }}
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.from === "user"
                    ? "text-right text-black"
                    : "text-left text-gray-700"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-xl ${
                    msg.from === "user" ? "bg-sky-100" : "bg-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="text-left text-gray-500 italic animate-pulse">
                🤖 Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 px-3 py-2 border rounded-lg text-sm"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                playTyping(); // ✅ typing sound
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask me something..."
            />

            <button
              className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-sky-600"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
