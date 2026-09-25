import { Mail, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 sm:px-8 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-bold italic text-white">F</span>
              <span className="text-sm font-semibold tracking-[0.2em] text-white">
                FREIDA
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Appointment Setter, Virtual Assistant, and Customer Support
              specialist — helping businesses stay organized and turn
              conversations into opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-emerald-400/70 mb-4">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-emerald-400/70 mb-4">
              GET IN TOUCH
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:godswillchisomfreida@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300"
              >
                <Mail size={15} />
                godswillchisomfreida@gmail.com
              </a>
              <a
                href="https://wa.me/2349064556558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/freida-okereke-009642368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-300 transition-colors duration-300"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Chisom Freida Okereke. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Available for Remote Opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}