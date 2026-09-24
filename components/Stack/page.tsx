import {
  SiGmail,
  SiWhatsapp,
  SiZoom,
  SiGooglemeet,
  SiGoogledocs,
  SiGooglesheets,
  SiFacebook,
  SiInstagram,
  SiReddit,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Calendar, ListTodo, Cloud, Database, FileText, Table2, Presentation } from "lucide-react";

const tools = [
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Zoom", icon: SiZoom, color: "#2D8CFF" },
  { name: "Google Meet", icon: SiGooglemeet, color: "#00897B" },
  { name: "Google Docs", icon: SiGoogledocs, color: "#4285F4" },
  { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
  { name: "Microsoft Word", icon: FileText, color: "#2B579A" },
  { name: "Microsoft Excel", icon: Table2, color: "#217346" },
  { name: "Microsoft PowerPoint", icon: Presentation, color: "#B7472A" },
  { name: "Calendar Management", icon: Calendar, color: "#34D399" },
  { name: "Task Management", icon: ListTodo, color: "#34D399" },
  { name: "Cloud Storage", icon: Cloud, color: "#34D399" },
  { name: "CRM Platforms", icon: Database, color: "#34D399" },
  { name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2" },
  { name: "Facebook", icon: SiFacebook, color: "#1877F2" },
  { name: "Instagram", icon: SiInstagram, color: "#E4405F" },
  { name: "Reddit", icon: SiReddit, color: "#FF4500" },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-18 sm:py-20 px-5 sm:px-8 md:px-12 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-400/70 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
          TOOLS & TECHNOLOGY
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-xl">
          Tools I Work With
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-12 leading-relaxed">
          I use these platforms to manage communication, organize schedules,
          research prospects, coordinate CRM data, and stay connected with
          clients and teams.
        </p>

        {/* Tools grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-4 py-6 hover:border-emerald-400/30 hover:bg-black/40 hover:scale-[1.03] transition-all duration-300"
            >
              <Icon size={32} color={color} />
              <span className="text-xs sm:text-sm font-semibold text-white text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}