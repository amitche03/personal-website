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
  title: {
    default: "Mitchell Anderson — Software Engineer",
    template: "%s | Mitchell Anderson",
  },
  description:
    "Software Engineer at ServiceNow specializing in full-stack development, data systems, and product-focused engineering. Based in the Bay Area.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "Bay Area",
    "ServiceNow",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Mitchell Anderson" }],
  creator: "Mitchell Anderson",
  openGraph: {
    title: "Mitchell Anderson — Software Engineer",
    description:
      "Full-stack engineer building reliable data-driven products at ServiceNow. View my projects, experience, and get in touch.",
    type: "website",
    url: "https://mitchellanderson.dev",
    siteName: "Mitchell Anderson",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitchell Anderson — Software Engineer",
    description:
      "Full-stack engineer building reliable data-driven products at ServiceNow.",
    creator: "@mitchellanderson",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://mitchellanderson.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-5 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
