"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const index = navLinks.findIndex((l) => l.name === activeLink);
    const el = linkRefs.current[index];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeLink]);
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3 shadow-lg">
        {/* Logo — always visible */}
        <div className="flex items-center gap-3 pl-2">
          <span className="text-2xl font-bold italic text-white">F</span>
          <span className="h-5 w-px bg-white/20 hidden sm:block" />
          <span className="hidden sm:inline text-sm font-semibold tracking-[0.25em] text-white">
            FREIDA
          </span>
        </div>

        {/* Center links — desktop only */}
        <div ref={linksContainerRef} className="hidden lg:flex items-center gap-1 relative">
          <span
            className="absolute top-0 h-full rounded-full bg-white/10 transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
          {navLinks.map((link, i) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                ref={(el) => { linkRefs.current[i] = el; }}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative z-10 px-4 py-1 text-sm rounded-full transition-colors ${
                  isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.8)]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4 pr-1">
          {/* Available for work — tablet and up */}
          <span className="hidden md:block h-5 w-px bg-white/20" />
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-300 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
            Available for work
          </div>
          <span className="hidden md:block h-5 w-px bg-white/20" />

          {/* Let's Talk — always visible */}
          <button className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
            Let&apos;s Talk
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>
    </header>
  );
}