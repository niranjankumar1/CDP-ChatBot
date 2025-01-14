import React, { useState } from 'react';
import { Message } from './types';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { generateResponse } from './utils/chatbot';
import { Bot } from 'lucide-react';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your CDP Assistant. I can help you with questions about Segment, mParticle, Lytics, and Zeotap. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Generate and add bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(content),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-lg min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-xl font-semibold">CDP Support Assistant</h1>
            <p className="text-sm text-blue-100">Ask me anything about Segment, mParticle, Lytics, or Zeotap</p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        
        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;