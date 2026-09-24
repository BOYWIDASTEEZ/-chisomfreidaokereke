 import { Mail, MessageCircle, Download, ArrowUpRight, ArrowDown } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-18 sm:py-20 px-5 sm:px-8 md:px-12 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-400/70 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
            CONTACT ME
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s turn your
            <br />
            leads into <span className="text-emerald-400">conversations.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 max-w-md">
            Available for appointment setting, lead generation, virtual
            assistance, and customer support opportunities.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
            Choose any option to email, chat on WhatsApp, connect, or
            download my CV.
          </p>
        </div>

        {/* Right column — stacked cards */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:godswillchisomfreida@gmail.com?subject=Portfolio Inquiry"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-6 py-5 hover:border-emerald-400/30 hover:bg-black/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email me</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  godswillchisomfreida@gmail.com
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-gray-500" />
          </a>
          <a
            href="https://wa.me/2349064556558?text=Hi%20Freida%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-6 py-5 hover:border-emerald-400/30 hover:bg-black/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Chat on WhatsApp</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  +234 906 455 6558
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/freida-okereke-009642368"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-6 py-5 hover:border-emerald-400/30 hover:bg-black/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <FaLinkedin size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">LinkedIn</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Connect with me
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-gray-500" />
          </a>
          <a
            href="/documents/Okereke_Chisom_Freida_Remote_Operations.pdf"
            download
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md px-6 py-5 hover:border-emerald-400/30 hover:bg-black/40 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <Download size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Download CV</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Remote Operations PDF
                </p>
              </div>
            </div>
            <ArrowDown size={18} className="text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
}