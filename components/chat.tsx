'use client'

import { DefaultChatTransport } from 'ai'
import { useChat } from '@ai-sdk/react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useState } from 'react'

export function Chat() {
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: 'http://localhost:7031/chat',
    }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || status === 'submitted' || status === 'streaming') return
    sendMessage({
      role: 'user',
      parts: [{ type: 'text', text: input }],
    })
    setInput('')
  }

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle>chat</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.length === 0 && (
            <div className="text-muted-foreground text-sm text-center py-8">
              no messages yet. start a conversation
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div className="text-sm font-medium mb-1 opacity-70">
                  {message.role === 'user' ? 'you' : 'assistant'}
                </div>
                <div className="text-sm whitespace-pre-wrap">
                  {message.parts
                    .filter((part) => part.type === 'text')
                    .map((part, idx) => (
                      <span key={idx}>{part.text}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
          {status === 'streaming' && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="text-sm opacity-50">thinking...</div>
              </div>
            </div>
          )}
          {error && (
            <div className="text-destructive text-sm">
              error: {error.message}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a message..."
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={status === 'submitted' || status === 'streaming'}
          />
          <button
            type="submit"
            disabled={status === 'submitted' || status === 'streaming' || !input.trim()}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            send
          </button>
        </form>
      </CardContent>
    </Card>
  )
}
