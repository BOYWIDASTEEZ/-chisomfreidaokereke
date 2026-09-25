"use client";

import { useState } from "react";
import { List, X, Home, User, Briefcase, MessageCircle } from "lucide-react";

const sections = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: MessageCircle },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3">
      {/* Single pill container */}
      <div
        className={`flex flex-col rounded-2xl border border-emerald-400/30 bg-black/60 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-out ${
          open
            ? "opacity-100 max-h-96 translate-y-0"
            : "opacity-0 max-h-0 translate-y-4 pointer-events-none"
        }`}
      >
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.name}
              href={s.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`flex items-center gap-3 px-5 py-3.5 text-sm text-gray-300 hover:bg-emerald-400/10 hover:text-emerald-300 transition-all duration-300 whitespace-nowrap ${
                i !== sections.length - 1 ? "border-b border-white/10" : ""
              } ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            >
              <Icon size={16} className="text-emerald-400" />
              {s.name}
            </a>
          );
        })}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-black/40 backdrop-blur-md text-emerald-400 shadow-lg hover:scale-110 transition-all duration-300"
      >
        {open ? <X size={20} /> : <List size={20} />}
      </button>
    </div>
  );
}