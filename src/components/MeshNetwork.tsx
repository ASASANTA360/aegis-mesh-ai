export default function MeshNetwork() {
  const devices = [
    {
      name: "Laptop",
      icon: "💻",
      status: "Primary Node",
      power: "16GB RAM",
    },
    {
      name: "Phone",
      icon: "📱",
      status: "Connected",
      power: "8GB RAM",
    },
    {
      name: "Raspberry Pi",
      icon: "🍓",
      status: "Edge Node",
      power: "4GB RAM",
    },
  ];

  return (
    <section className="
      rounded-3xl
      bg-white/5
      border
      border-white/10
      p-5
      backdrop-blur-xl
    ">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          🌐 QVAC Mesh Network
        </h2>

        <p className="text-gray-400">
          Decentralized P2P AI inference network
        </p>
      </div>


      <div className="grid grid-cols-3 gap-4">

        {devices.map((device) => (
          <div
            key={device.name}
            className="
              rounded-2xl
              bg-black/30
              border
              border-blue-500/30
              p-5
              text-center
              hover:scale-105
              transition
            "
          >

            <div className="
              text-5xl
              animate-pulse
            ">
              {device.icon}
            </div>


            <h3 className="
              mt-3
              text-white
              font-bold
            ">
              {device.name}
            </h3>


            <p className="text-green-400 text-sm">
              ● {device.status}
            </p>


            <p className="text-gray-400 text-sm mt-2">
              {device.power}
            </p>

          </div>
        ))}

      </div>


      <div className="
        mt-6
        rounded-2xl
        bg-green-500/10
        border
        border-green-500/30
        p-4
        text-center
      ">

        <h3 className="
          text-green-400
          font-bold
        ">
          ⚡ Distributed Inference Active
        </h3>

        <p className="text-gray-300 mt-1">
          QVAC Fabric sharing AI workloads
          across trusted devices
        </p>

      </div>

    </section>
  );
}