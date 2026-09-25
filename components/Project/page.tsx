import { Search, Calendar, Send, RefreshCw, Layers, Headphones } from "lucide-react";

const projects = [
  {
    number: "01",
    icon: Search,
    label: "PRACTICE PROJECT · LEAD GENERATION",
    title: "Building a Targeted Prospect List",
    challenge:
      "Identify potential clients within a specific target market and organize their information for effective outreach.",
    action:
      "Defined the ideal customer profile, researched businesses that fit the criteria, identified relevant decision-makers, then organized and categorized leads based on suitability to prepare them for outreach.",
    value:
      "Demonstrates the research and organizational discipline needed to build a qualified, outreach-ready prospect pipeline from scratch.",
    skills: ["Lead Generation", "Research", "Organization", "Attention to Detail"],
  },
  {
    number: "02",
    icon: Calendar,
    label: "PRACTICE PROJECT · APPOINTMENT SETTING",
    title: "From Prospect to Booked Appointment",
    challenge:
      "Move a prospect from first contact to a booked, qualified appointment without losing momentum along the way.",
    action:
      "Followed a structured workflow — research, outreach, response handling, qualifying questions, consistent follow-up — to move qualified prospects toward a scheduled call.",
    value:
      "Shows the ability to manage a full appointment-setting pipeline professionally, from first touch to booked call.",
    skills: ["Appointment Setting", "Lead Qualification", "Communication", "Follow-Up", "Scheduling"],
  },
  {
    number: "03",
    icon: Send,
    label: "PRACTICE PROJECT · COLD OUTREACH",
    title: "Professional Prospect Outreach",
    challenge:
      "Start genuine conversations with potential clients using a non-aggressive approach, rather than immediately pushing a sale.",
    action:
      "Wrote outreach messages that reference the prospect's actual business, then ask a curious, open-ended question to invite a real reply instead of a pitch.",
    value:
      "Demonstrates outreach copywriting that opens dialogue and builds early trust rather than triggering resistance.",
    skills: ["Cold Outreach", "Copywriting", "Prospect Engagement", "Communication"],
  },
  {
    number: "04",
    icon: RefreshCw,
    label: "PRACTICE PROJECT · FOLLOW-UP",
    title: "Turning Conversations Into Opportunities",
    challenge:
      "Prevent qualified opportunities from being lost simply because a prospect got busy or forgot to respond.",
    action:
      "Built a 4-step follow-up sequence — a friendly reminder, a value-based nudge, a respectful check-in, and a final open-ended close.",
    value:
      "Shows a persistent but respectful follow-up system that keeps opportunities alive without becoming intrusive.",
    skills: ["Follow-Up Management", "Communication", "Relationship Building", "Sales Support"],
  },
  {
    number: "05",
    icon: Layers,
    label: "PRACTICE PROJECT · CRM & PIPELINE",
    title: "Organizing Prospects Through the Sales Pipeline",
    challenge:
      "Keep every prospect organized and visible throughout the sales process so no lead is forgotten.",
    action:
      "Structured a 7-stage pipeline — New Lead, Contacted, Responded, Qualified, Appointment Set, Follow-Up, Closed — giving every lead a clear next step.",
    value:
      "Demonstrates CRM and pipeline thinking that prevents leads from slipping through the cracks.",
    skills: ["CRM Management", "Organization", "Data Management", "Follow-Up"],
  },
  {
    number: "06",
    icon: Headphones,
    label: "PRACTICE PROJECT · CUSTOMER SERVICE",
    title: "Professional Customer Communication",
    challenge:
      "Handle customer inquiries and complaints in a way that leaves the customer feeling heard and properly supported.",
    action:
      "Applied a Listen → Understand → Respond → Resolve → Follow-Up approach to every customer interaction, regardless of the issue.",
    value:
      "Shows a calm, professional, solution-focused approach to customer communication under any circumstance.",
    skills: ["Customer Service", "Communication", "Problem Solving", "Relationship Management"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-18 sm:py-20 px-5 sm:px-8 md:px-12 scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-400/70 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
          PORTFOLIO PROJECTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 max-w-2xl">
          Practical Work & Process
        </h2>

        {/* Project case studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.number}
                className="rounded-2xl border border-emerald-400/40 lg:border-white/10 bg-black/30 backdrop-blur-md overflow-hidden hover:border-emerald-400/30 transition-all duration-300"
              >
                {/* Visual header */}
                <div className="relative h-40 bg-black/40 border-b border-white/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl" />
                  <span className="absolute top-4 left-5 text-xs font-mono text-emerald-400/50">
                    {project.number}
                  </span>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                    <Icon size={26} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-[11px] tracking-widest text-emerald-400/70 font-semibold mb-2">
                    {project.label}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-4 leading-snug">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-200 font-semibold">Challenge: </span>
                      {project.challenge}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-200 font-semibold">Action: </span>
                      {project.action}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      <span className="text-gray-200 font-semibold">Value: </span>
                      {project.value}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}