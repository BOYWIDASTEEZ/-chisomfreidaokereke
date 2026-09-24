import React from 'react'
import {
  Calendar,
  Target,
  Laptop,
  Headset,
  ShieldCheck,
  ClipboardList,
  MessageCircle,
  Search,
  Sparkles,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Appointment Setting",
    description:
      "Engaging potential clients, qualifying prospects, and scheduling qualified appointments for sales teams.",
    tags: ["Outreach", "Scheduling", "Follow-Up"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Researching and identifying prospects based on target-market requirements and organizing leads for outreach.",
    tags: ["Prospect Research", "Lead Lists", "Qualification"],
  },
  {
    icon: Laptop,
    title: "Virtual Assistance",
    description:
      "Organized administrative support to help businesses manage day-to-day tasks more efficiently.",
    tags: ["Email", "Calendar", "Data Entry"],
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Making customers feel heard, respected, and properly supported through every interaction.",
    tags: ["Inquiries", "Resolution", "Relationships"],
  },
];

const traits = [
  { icon: ShieldCheck, title: "Reliable", description: "Completes tasks properly and on time." },
  { icon: ClipboardList, title: "Organized", description: "Prevents missed opportunities through structure." },
  { icon: MessageCircle, title: "Communicative", description: "Clear, respectful, professional at all times." },
  { icon: Search, title: "Detail-Oriented", description: "Notices the small things that matter most." },
  { icon: Sparkles, title: "Adaptable", description: "Comfortable learning new tools and systems." },
  { icon: Heart, title: "Customer-Focused", description: "Every interaction builds trust." },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-5 sm:px-8 md:px-12 scroll-mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Hi, I&apos;m Chisom Freida Okereke
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            A motivated and detail-oriented professional specializing in
            appointment setting, lead generation, virtual assistance, and
            customer support. My experience as a business owner has
            strengthened my ability to communicate professionally, manage
            inquiries, and maintain strong customer relationships — helping
            businesses save time and create more opportunities through
            consistent, professional communication.
          </p>
        </div>

        {/* What I Do */}
        <div className="mb-16">
          <h3 className="text-sm md:text-lg font-semibold tracking-widest text-gray-500 mb-6">
            WHAT I DO
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, description, tags }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 border-t-emerald-400/40 bg-black/30 backdrop-blur-md p-5 hover:border-emerald-400/30 hover:bg-black/40 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                  <Icon size={18} />
                </div>
                <h4 className="text-white font-semibold">{title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="mb-16">
          <h3 className="text-sm md:text-lg font-semibold tracking-widest text-gray-500 mb-6">
            WORK STYLE
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {traits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md p-4 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 text-emerald-400">
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">{title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing pitch */}
        <div className="relative rounded-3xl border border-emerald-400/20 bg-black/30 backdrop-blur-md p-8 sm:p-10 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Why Work With Me?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
              Hiring the right remote professional is about more than checking
              a list of skills — you need someone dependable, organized,
              communicative, and genuinely invested in doing the job well. My
              goal is to build long-term professional relationships where I can
              contribute to business growth while continuously developing my
              expertise, generating leads, booking appointments, and supporting
              your customers every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About