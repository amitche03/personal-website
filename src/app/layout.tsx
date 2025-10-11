import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitchell Anderson — Software Engineer",
  description:
    "Software Engineer specializing in full‑stack development, data systems, and product-focused engineering.",
  openGraph: {
    title: "Mitchell Anderson — Software Engineer",
    description:
      "Full‑stack engineer building reliable data-driven products. Projects, experience, and contact.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-5 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
