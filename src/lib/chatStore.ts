import { create } from "zustand";
import { CommanderAgent } from "@/agents/commander";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

interface ChatState {
  messages: Message[];
  loading: boolean;
  sendMessage: (text: string) => Promise<void>;
}

const commander = new CommanderAgent();

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      id: 1,
      role: "assistant",
      content:
        "Welcome to Aegis Mesh AI. Your private multi-agent system is ready.",
    },
  ],

  loading: false,

  sendMessage: async (text) => {
    const userMessage = {
      id: Date.now(),
      role: "user" as const,
      content: text,
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      loading: true,
    }));

    const response = await commander.execute({
      task: "chat",
      input: text,
      timestamp: Date.now(),
    });

    const aiMessage = {
      id: Date.now() + 1,
      role: "assistant" as const,
      content: response.result,
    };

    set((state) => ({
      messages: [...state.messages, aiMessage],
      loading: false,
    }));
  },
}));