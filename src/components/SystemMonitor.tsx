"use client";

import {
  Cpu,
  Zap,
  Clock,
  Database,
  Brain,
} from "lucide-react";

import { qvacLogger } from "@/qvac/logger";

export default function SystemMonitor() {

  const latest = qvacLogger.getLatest();

  const metrics = [
    {
      title: "Model",
      value: latest ? "Psy Model" : "Waiting",
      icon: Brain,
      color: "text-purple-400",
    },
    {
      title: "TPS",
      value: latest
        ? `${latest.tps}`
        : "0",
      icon: Zap,
      color: "text-yellow-400",
    },
    {
      title: "TTFT",
      value: latest
        ? `${latest.ttft}ms`
        : "0ms",
      icon: Clock,
      color: "text-green-400",
    },
    {
      title: "Logs",
      value: `${qvacLogger.getCount()}`,
      icon: Database,
      color: "text-red-400",
    },
    {
      title: "Status",
      value: latest
        ? "Active"
        : "Idle",
      icon: Cpu,
      color: "text-blue-400",
    },
  ];


  return (
    <section
      className="
        rounded-3xl
        bg-white/5
        border
        border-white/10
        p-5
        backdrop-blur-xl
      "
    >

      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          QVAC Live Monitor
        </h2>

        <p className="text-gray-400 text-sm">
          Real-time local AI inference metrics
        </p>
      </div>


      <div className="
        grid
        grid-cols-5
        gap-4
      ">

        {metrics.map((metric) => {

          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="
                rounded-2xl
                bg-black/30
                border
                border-white/10
                p-4
                hover:border-blue-500/40
                transition
              "
            >

              <div className="flex justify-between">

                <Icon
                  size={20}
                  className={metric.color}
                />

                <div
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-green-400
                    animate-pulse
                  "
                />

              </div>


              <p className="mt-4 text-gray-400 text-sm">
                {metric.title}
              </p>


              <h3 className="text-xl font-bold text-white">
                {metric.value}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}