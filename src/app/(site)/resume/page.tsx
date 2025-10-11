import Link from "next/link";

// Embeds the PDF stored in /public
export default function ResumePage() {
  const pdfPath = "/2025%20Mitchell%20Anderson%20SWE%20Resume%20%20copy.pdf"; // URL-encoded path
  return (
    <div className="py-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Resume</h1>
        <Link
          href={pdfPath}
          target="_blank"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
        >
          Open in new tab
        </Link>
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
