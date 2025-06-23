'use client';
import { useState, KeyboardEvent } from 'react';

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hello! How can I assist you today?' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMessage]);

        // Simulate bot response
        const botMessage = {
            from: 'bot',
            text: `You said: "${input.trim()}" 🤖 (Replace this with real response from Groq API)`,
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, botMessage]);
        }, 800);

        setInput('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
                >
                    <span>💬</span>
                    <span className="font-semibold">Chat Bot</span>
                </button>
            </div>

            {/* Chatbot Window */}
            {open && (
                <div className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-xl border border-gray-300 flex flex-col overflow-hidden z-50">
                    {/* Header */}
                    <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                        <h4 className="text-lg font-semibold">ChatBot</h4>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="text-white text-xl"
                            aria-label="Close ChatBot"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-60 custom-scroll">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`text-sm max-w-xs px-3 py-2 rounded-lg ${msg.from === 'user'
                                        ? 'bg-blue-500 text-white ml-auto text-right'
                                        : 'bg-gray-200 text-gray-800 mr-auto text-left'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-100 text-gray-800 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />

                        <button
                            type="button"
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
