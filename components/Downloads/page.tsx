import { FileText, Download } from "lucide-react";

const documents = [
  {
    title: "Remote Operations CV",
    description:
      "ATS-friendly CV for Virtual Assistant, Appointment Setting, and Customer Support roles.",
    pdf: "/documents/Okereke_Chisom_Freida_Remote_Operations.pdf",
    word: "/documents/Okereke_Chisom_Freida_Remote_Operations.docx",
  },
  {
    title: "Professional Brag File",
    description:
      "Evidence-led record of skills, training, real experience, and demonstrated project work.",
    pdf: "/documents/Freida-Okereke-Brag-File.pdf",
    word: "/documents/Freida-Okereke-Brag-File.docx",
  },
];

export default function Downloads() {
  return (
    <section className="relative py-18 sm:py-20 px-5 sm:px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-4 py-1.5 text-xs tracking-widest text-emerald-400/70 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.7)]" />
          DOCUMENTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-xl">
          Download My Professional Documents
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Choose the recruiter-ready PDF or the editable Word version.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.title}
              className="flex flex-col gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-md p-6 sm:p-8 hover:border-emerald-400/50 hover:bg-emerald-400/15 transition-all duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400">
                <FileText size={20} />
              </div>
              <h3 className="text-white font-semibold text-lg">{doc.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {doc.description}
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href={doc.pdf}
                  download
                  className="flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-semibold text-black hover:bg-emerald-300 hover:scale-105 transition-all duration-300"
                >
                  <Download size={14} />
                  PDF
                </a>
                <a
                  href={doc.word}
                  download
                  className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-gray-300 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  <Download size={14} />
                  Word
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}