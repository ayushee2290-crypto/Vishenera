'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 I'm Vishenera's AI assistant. How can I help you today? I can assist with:\n\n• Cloud & DevOps solutions\n• Service inquiries\n• Scheduling consultations\n• Technical questions",
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: 'user', text: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: "Thank you for your message! Our team will review your inquiry. For immediate assistance, please use our contact form or schedule a consultation. Is there anything specific about our CloudOps, DBOps, or AI Automation services you'd like to know?",
        },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-full shadow-lg shadow-primary-500/30 flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-navy-800/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-cyan-500 p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Vishenera AI Assistant</h3>
                <p className="text-white/70 text-xs">Online • Ready to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/10 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">
                Need help choosing the right solution? Just ask!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
