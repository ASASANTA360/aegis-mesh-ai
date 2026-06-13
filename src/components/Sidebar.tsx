import {
  MessageSquare,
  FileText,
  Shield,
  Brain,
  Settings,
  Cpu,
  Wifi,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    {
      icon: MessageSquare,
      name: "AI Chat",
      active: true,
    },
    {
      icon: FileText,
      name: "Documents",
    },
    {
      icon: Shield,
      name: "Security",
    },
    {
      icon: Brain,
      name: "Agents",
    },
    {
      icon: Settings,
      name: "Settings",
    },
  ];

  return (
    <aside
      className="
        w-72
        h-screen
        bg-black/70
        backdrop-blur-2xl
        border-r
        border-white/10
        p-5
        flex
        flex-col
      "
    >
      {/* Logo */}
      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              flex
              items-center
              justify-center
              text-2xl
              shadow-lg
              shadow-blue-600/40
            "
          >
            🛡
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Aegis Mesh AI
            </h1>

            <p className="text-xs text-gray-400">
              Edge Intelligence
            </p>
          </div>

        </div>

      </div>


      {/* QVAC Status */}
      <div
        className="
          rounded-2xl
          bg-green-500/10
          border
          border-green-500/30
          p-4
          mb-6
        "
      >

        <div className="flex items-center gap-2">
          <Cpu className="text-green-400" size={18}/>
          <span className="text-green-400 font-medium">
            QVAC Engine
          </span>
        </div>

        <p className="text-gray-300 text-sm mt-2">
          Local AI inference active
        </p>

      </div>


      {/* Navigation */}
      <nav className="space-y-2 flex-1">

        {items.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`
                w-full
                flex
                items-center
                gap-3
                p-4
                rounded-2xl
                transition-all
                ${
                  item.active
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/20"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >

              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>

            </button>
          );

        })}

      </nav>


      {/* Device Status */}
      <div
        className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-4
        "
      >

        <div className="flex items-center gap-2 mb-3">
          <Wifi className="text-blue-400" size={18}/>
          <span className="text-white font-medium">
            Mesh Status
          </span>
        </div>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-400">
              Device
            </span>

            <span className="text-white">
              Laptop
            </span>
          </div>


          <div className="flex justify-between">
            <span className="text-gray-400">
              Connection
            </span>

            <span className="text-green-400">
              Secure
            </span>
          </div>


          <div className="flex justify-between">
            <span className="text-gray-400">
              Nodes
            </span>

            <span className="text-white">
              1/5
            </span>
          </div>

        </div>

      </div>

    </aside>
  );
}