import Link from "next/link";

// Embeds the PDF stored in /public
export default function ResumePage() {
  const pdfPath = "/2025%20Mitchell%20Anderson%20SWE%20Resume%20%20copy.pdf"; // URL-encoded path
  return (
    <div className="py-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex gap-3">
          <a
            href={pdfPath}
            download="Mitchell_Anderson_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </a>
          <Link
            href={pdfPath}
            target="_blank"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            Open in new tab
          </Link>
        </div>
      </div>
      <p className="mb-4 text-sm text-white/70">
        You can view the embedded PDF below or open it in a new tab.
      </p>
      <div className="h-[calc(100vh-220px)] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
        <iframe
          title="Mitchell Anderson Resume"
          src={pdfPath + "#toolbar=1&navpanes=0&scrollbar=1"}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
