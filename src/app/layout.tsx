import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marwane Ahmed – Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Marwane Ahmed — full-stack developer and AI engineer specialising in React, Next.js, Python, PyTorch and LLM-powered applications.",
  keywords: [
    "developer",
    "portfolio",
    "full-stack",
    "ai engineer",
    "machine learning",
    "react",
    "nextjs",
    "python",
    "langchain",
  ],
  openGraph: {
    title: "Marwane Ahmed – Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Marwane Ahmed — full-stack developer and AI engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} mesh-bg noise antialiased`}>
        {children}
      </body>
    </html>
  );
}
