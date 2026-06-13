import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import AgentStatus from "@/components/AgentStatus";
import SystemMonitor from "@/components/SystemMonitor";
import MeshNetwork from "@/components/MeshNetwork";

export default function Home() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-indigo-950 text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="flex flex-1 flex-col overflow-y-auto">

        {/* Top Navigation */}
        <header className="
          border-b
          border-white/10
          backdrop-blur-xl
          px-8
          py-5
          flex
          items-center
          justify-between
        ">

          <div>
            <h1 className="text-3xl font-bold">
              🛡 Aegis Mesh AI
            </h1>

            <p className="text-gray-400 mt-1">
              Private Intelligence. Powered by Your Devices.
            </p>
          </div>


          <div className="flex items-center gap-3">

            <div className="
              px-4
              py-2
              rounded-full
              bg-green-500/15
              border
              border-green-500/30
              text-green-400
              text-sm
            ">
              ● QVAC Engine Online
            </div>


            <div className="
              px-4
              py-2
              rounded-full
              bg-blue-500/15
              border
              border-blue-500/30
              text-blue-400
              text-sm
            ">
              🧠 Psy Model Loaded
            </div>

          </div>

        </header>


        {/* Stats Cards */}
        <section className="grid grid-cols-4 gap-5 px-5 pt-5">

          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
            <p className="text-gray-400 text-sm">
              Active Agents
            </p>

            <h2 className="text-4xl font-bold mt-3">
              5
            </h2>

            <p className="text-green-400 text-sm mt-2">
              All Systems Online
            </p>
          </div>


          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
            <p className="text-gray-400 text-sm">
              Privacy Mode
            </p>

            <h2 className="text-2xl font-bold mt-3">
              100% Local
            </h2>

            <p className="text-blue-400 text-sm mt-2">
              Zero Cloud AI
            </p>
          </div>


          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
            <p className="text-gray-400 text-sm">
              AI Engine
            </p>

            <h2 className="text-2xl font-bold mt-3">
              QVAC SDK
            </h2>

            <p className="text-purple-400 text-sm mt-2">
              Edge Inference
            </p>
          </div>


          <div className="rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
            <p className="text-gray-400 text-sm">
              Mesh Network
            </p>

            <h2 className="text-2xl font-bold mt-3">
              Enabled
            </h2>

            <p className="text-yellow-400 text-sm mt-2">
              P2P Ready
            </p>
          </div>

        </section>


        {/* Performance Monitor */}
        <div className="px-5 pt-5">
          <SystemMonitor />
        </div>

        {/* Mesh Network */}
      <div className="px-5 pt-5">
        <MeshNetwork />
      </div>


        {/* AI Workspace */}
        <section className="
          flex-1
          flex
          gap-5
          p-5
          overflow-hidden
        ">

          {/* AI Chat */}
          <div className="
            flex-1
            rounded-3xl
            overflow-hidden
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            shadow-2xl
            shadow-blue-900/20
          ">
            <ChatWindow />
          </div>


          {/* Agent Control */}
          <div className="
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-2xl
            shadow-purple-900/20
          ">
            <AgentStatus />
          </div>

        </section>

      </main>

    </div>
  );
}