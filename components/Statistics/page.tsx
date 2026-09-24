import React from 'react'
import { Calendar, Target, Briefcase, Wrench } from "lucide-react";

const stats = [
  { icon: Calendar, value: "4", label: "Core Services" },
  { icon: Target, value: "16", label: "Core Skills" },
  { icon: Briefcase, value: "6", label: "Portfolio Projects" },
  { icon: Wrench, value: "12+", label: "Tools & Platforms" },
];

const Stat = () => {
  return (
    <section className="relative py-4 sm:py-6 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-2 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md px-3 py-5 shadow-lg hover:border-emerald-400/30 hover:bg-black/40 transition-all duration-300"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-400">
              <Icon size={16} />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {value}
            </span>
            <span className="text-[11px] sm:text-xs text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stat