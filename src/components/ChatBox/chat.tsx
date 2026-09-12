'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button, Flex, Text } from '@av-digital/components';

export default function ChatWithGPT() {
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = { from: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { from: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Erro ao conectar ao servidor.' }]);
    }

    setLoading(false);
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed z-1 bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}

      {isOpen && (
        <Flex direction="column" className="fixed z-1 bottom-4 right-4 w-80 max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300 animate-fade-in">
          <Flex justify="between" align="center" className="bg-blue-600 text-white p-3">
            <Text variant="body" weight="bold" classname="text-white">Assitente Virtual</Text>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 hover:text-gray-200 transition" />
            </button>
          </Flex>

          <Flex direction="column" gap="sm" className="flex-1 p-3 overflow-auto bg-gray-50">
            {messages.length === 0 && (
              <Text variant="caption" classname="italic">Converse comigo...</Text>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] p-2 rounded text-sm ${
                  msg.from === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-right'
                    : 'bg-gray-200 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <Text variant="caption" classname="italic">Escrevendo...</Text>}
          </Flex>

          <Flex gap="sm" className="p-3 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              disabled={loading}
              className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
            />
            <Button
              onClick={sendMessage}
              variant="primary"
              className="rounded text-sm disabled:opacity-50"
              {...({ disabled: loading } as React.HTMLAttributes<HTMLButtonElement>)}
            >
              Enviar
            </Button>
          </Flex>
        </Flex>
      )}
    </>
  );
}
