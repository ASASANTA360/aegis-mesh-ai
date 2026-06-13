import { Brain, FileText, Shield, Network } from "lucide-react";

export default function AgentStatus() {
  const agents = [
    {
      name: "Commander",
      icon: Brain,
      status: "Online",
      health: "99%",
      latency: "12ms",
      description: "Task orchestration engine",
    },
    {
      name: "Document",
      icon: FileText,
      status: "Ready",
      health: "100%",
      latency: "8ms",
      description: "Local document intelligence",
    },
    {
      name: "Security",
      icon: Shield,
      status: "Scanning",
      health: "98%",
      latency: "15ms",
      description: "Threat analysis system",
    },
    {
      name: "Mesh",
      icon: Network,
      status: "Connected",
      health: "97%",
      latency: "22ms",
      description: "P2P inference network",
    },
  ];

  return (
    <section
      className="
        w-80
        h-full
        overflow-y-auto
        bg-white/5
        backdrop-blur-xl
        p-5
      "
    >
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-white text-xl font-bold">
          Agent Control Center
        </h2>

        <p className="text-gray-400 text-sm">
          Real-time AI agent monitoring
        </p>
      </div>

      {/* Agent List */}
      <div className="space-y-4 pb-6">
        {agents.map((agent) => {
          const Icon = agent.icon;

          return (
            <div
              key={agent.name}
              className="
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                hover:border-blue-500/40
                hover:bg-blue-500/5
                transition-all
                duration-300
              "
            >
              {/* Top */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-blue-500/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={18}
                      className="text-blue-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">
                      {agent.name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {agent.description}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-green-400
                      animate-pulse
                    "
                  />

                  <span className="text-green-400 text-xs">
                    {agent.status}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">
                    Health
                  </p>

                  <p className="text-white font-medium">
                    {agent.health}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Latency
                  </p>

                  <p className="text-white font-medium">
                    {agent.latency}
                  </p>
                </div>
              </div>

              {/* Health Bar */}
              <div className="mt-3">
                <div className="w-full h-1 rounded-full bg-white/10">
                  <div
                    className="
                      h-1
                      rounded-full
                      bg-green-400
                      w-[98%]
                    "
                  />
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}