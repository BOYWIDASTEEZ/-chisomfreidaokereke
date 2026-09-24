"use client";

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, ArrowRight, Code2, Briefcase } from "lucide-react";
import { SiGmail, SiWhatsapp, SiGooglecalendar, SiHubspot } from "react-icons/si";
import { Database } from "lucide-react";

const tools = [
  { name: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Calendly", icon: SiGooglecalendar, color: "#34D399" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "CRM", icon: Database, color: "#34D399" },
];

const roles = [
  "Appointment Setter",
  "Virtual Assistant",
  "Lead Generation",
  "Customer Support",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); // fade back in with new text
      }, 300); // matches transition duration below
    }, 2500); // time each label stays visible

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="relative min-h-screen overflow-hidden pt-32 sm:pt-40 pb-12 sm:pb-20 px-5 sm:px-8 md:px-12">
      {/* Background glow orbs */}
      <div
        className="animate-glow absolute top-1/4 right-0 w-[700px] h-[700px] bg-emerald-500/10 rounded-full pointer-events-none"
        style={{
          filter: "blur(160px)",
          maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />
      <div
        className="animate-glow-delayed absolute top-10 left-1/4 w-[550px] h-[550px] bg-emerald-400/5 rounded-full pointer-events-none"
        style={{
          filter: "blur(140px)",
          maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left column */}
      <div>
        <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 px-4 py-2 text-[11px] sm:text-xs tracking-wide sm:tracking-widest text-emerald-300 mb-6 whitespace-nowrap min-w-[180px] sm:min-w-[200px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
          <span
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[roleIndex]}
          </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Behind every booked call,
            <br />
            there&apos;s a system.{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              I&apos;m it.
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
            I help businesses connect with the right prospects, maintain meaningful customer relationships, and stay organized through relaible communication, lead generation, appointment setting, and administrative suport.
          </p>

          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <a
             href="#contact"
             className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-300 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              <Briefcase size={16} />
              Hire Me
            </a>

            <a 
             href="#projects"
             className="flex items-center gap-2 rounded-full border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400/10 hover:scale-105 transition-all duration-300">
              <ArrowUpRight size={16} />
              View My Work
            </a>

            <a 
             href="#about"
             className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-300">
              About Me
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Tools */}
          <div className="mt-16 flex gap-8 flex-wrap">
            {tools.map(({ name, icon: Icon, color }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center">
                  <Icon size={18} color={color} />
                </div>
                <span className="text-xs text-gray-500">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden">
            {/* Swap this for your friend's real photo */}
            <img
              src="/Images/Freida-portrait.jpeg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
