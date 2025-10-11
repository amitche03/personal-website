import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 text-sm text-white/60 md:flex-row md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Mitchell Anderson</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/amitche03" className="hover:text-white" target="_blank">GitHub</Link>
          <Link href="https://www.linkedin.com/in/mitchell-s-anderson" className="hover:text-white" target="_blank">LinkedIn</Link>
          <Link href="mailto:mitchell-s-anderson@unc.edu" className="hover:text-white">Email</Link>
        </div>
      </div>
    </footer>
  );
}
