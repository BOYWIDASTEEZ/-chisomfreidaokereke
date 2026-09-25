"use client";

import { useState } from "react";
import { Briefcase, Award, ExternalLink, X, Download } from "lucide-react";

const responsibilities = [
  "Communicating directly with customers",
  "Responding to product inquiries",
  "Understanding customer needs",
  "Processing and coordinating orders",
  "Following up with customers",
  "Promoting products through social media",
  "Creating product descriptions & promotional content",
  "Managing customer expectations",
  "Handling customer concerns professionally",
  "Maintaining organized business operations",
];

const trainingAreas = [
  "Appointment Setting",
  "Lead Generation",
  "Prospecting",
  "Lead Qualification",
  "Cold Outreach",
  "Follow-Up Strategies",
  "CRM Fundamentals",
  "Sales Communication",
  "Appointment Scheduling",
];

const coreSkills = [
  "Appointment Setting",
  "Lead Generation",
  "Prospect Research",
  "Lead Qualification",
  "Cold Outreach",
  "CRM Management",
  "Customer Service",
  "Virtual Assistance",
  "Calendar Management",
  "Email Management",
  "Administrative Support",
  "Data Entry",
  "Professional Communication",
  "Follow-Up Management",
  "Time Management",
  "Attention to Detail",
];

const Experience = () => {
  const [certificateOpen, setCertificateOpen] = useState(false);
  return (
    <section
      id="experience"
      className="relative py-18 sm:py-20 px-5 sm:px-8 md:px-12 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-400/70 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
          EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 max-w-2xl">
          Business Experience & Training
        </h2>

        {/* Business Experience */}
        <div
          className="mb-16 -mx-5 sm:-mx-8 md:-mx-12 px-5 sm:px-8 md:px-12 py-12"
          style={{ backgroundColor: "#04120a" }}
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
              <Briefcase size={18} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                Independent Business Owner
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Entrepreneurial & Customer Service Experience
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-5">
            Through managing my own business, I developed practical
            experience in customer communication, product marketing, sales,
            order coordination, follow-ups, and customer relationship
            management — strengthening my ability to communicate clearly,
            manage multiple responsibilities, and deliver a positive customer
            experience.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {responsibilities.map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-gray-400">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 rounded-2xl border border-white/10 border-t-emerald-400/40 bg-black/30 backdrop-blur-md p-6 sm:p-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <Award size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Appointment Setting Certification
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Professional Appointment Setting Training
                </p>
              </div>
            </div>
            <button
              onClick={() => setCertificateOpen(true)}
              className="flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-400/10 hover:scale-105 transition-all duration-300"
            >
              View Certificate
              <ExternalLink size={14} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {trainingAreas.map((area) => (
              <span
                key={area}
                className="text-[11px] px-3 py-1.5 rounded-full bg-black/10 border border-emerald-400/20 text-gray-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold tracking-widest text-gray-500 mb-6">
            CORE SKILLS
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-4 py-2 rounded-full border bg-emerald-400/10 border-emerald-400/30 backdrop-blur-md text-gray-300 hover:border-emerald-400/30 hover:text-emerald-300 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

        {/* Certificate Modal */}
        {certificateOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
          onClick={() => setCertificateOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl border border-emerald-400/20 bg-black/60 backdrop-blur-md p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                Appointment Setting Certification
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href="/images/Freida-certificate.jpeg"
                  download
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 hover:border-emerald-400/30 hover:text-emerald-300 transition-all duration-300"
                >
                  <Download size={16} />
                </a>
                <button
                  onClick={() => setCertificateOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 hover:border-emerald-400/30 hover:text-emerald-300 transition-all duration-300"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img
                src="/Images/Freida-certificate.jpeg"
                alt="Appointment Setting Certification"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>
          </div>
        </div>)}
    </section>
  )
}

export default Experience