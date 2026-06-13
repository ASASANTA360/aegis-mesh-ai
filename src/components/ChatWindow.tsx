"use client";

import { useState } from "react";
import {
  Send,
  Mic,
  Paperclip,
  Cpu,
} from "lucide-react";

import { useChatStore } from "@/lib/chatStore";

export default function ChatWindow() {
  const [input, setInput] = useState("");

  const {
    messages,
    loading,
    sendMessage,
  } = useChatStore();

  async function handleSend() {
    if (!input.trim()) return;

    await sendMessage(input);
    setInput("");
  }

  return (
    <main className="flex h-full flex-col bg-gradient-to-br from-black/20 to-indigo-950/40">

      {/* Header */}
      <div className="border-b border-white/10 p-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="
            w-12 h-12
            rounded-full
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            flex items-center justify-center
            text-xl
          ">
            🤖
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              Aegis Assistant
            </h2>

            <p className="text-green-400 text-sm">
              Local AI • Commander Active
            </p>
          </div>

        </div>


        <div className="flex gap-2">

          <div className="
            px-3 py-2
            rounded-xl
            bg-white/10
            border border-white/10
            text-sm text-white
            flex items-center gap-2
          ">

            <Cpu size={16}/>
            QVAC Psy Model

          </div>

        </div>

      </div>


      {/* Messages */}
      <div className="
        flex-1
        overflow-y-auto
        p-6
        space-y-4
      ">

        {messages.map((message) => (

          <div
            key={message.id}
            className={`
              flex
              ${message.role === "user"
                ? "justify-end"
                : "justify-start"}
            `}
          >

            <div
              className={`
                max-w-[80%]
                rounded-2xl
                px-5
                py-3
                ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-gray-200 border border-white/10"
                }
              `}
            >
              {message.content}
            </div>

          </div>

        ))}


        {loading && (

          <div className="
            text-green-400
            animate-pulse
          ">

            🧠 Commander Agent thinking...

          </div>

        )}

      </div>


      {/* Input Area */}
      <div className="
        border-t
        border-white/10
        p-5
      ">

        <div className="
          flex
          items-center
          gap-3
          rounded-2xl
          bg-white/5
          border border-white/10
          p-3
        ">

          <button className="
            p-3
            rounded-xl
            hover:bg-white/10
            text-gray-400
          ">
            <Paperclip size={20}/>
          </button>


          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-500
            "
            placeholder="Ask Aegis Mesh AI..."
          />


          <button className="
            p-3
            rounded-xl
            hover:bg-white/10
            text-gray-400
          ">

            <Mic size={20}/>

          </button>


          <button
            onClick={handleSend}
            className="
              p-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-500
              text-white
              transition
            "
          >

            <Send size={20}/>

          </button>

        </div>

      </div>

    </main>
  );
}