import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AnimatedCursor from "@/components/AnimatedCursor";
import FloatingElements from "@/components/FloatingElements";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Arun Kavanekar — Graphic Designer | 6+ Years Experience in Real Estate & Automotive Industries",
  description: "Professional graphic designer with 6+ years experience specializing in social media campaigns, print design, video editing, prepress production. Currently at Kumar Properties, previously with automotive giants like Yamaha, Honda, Bajaj.",
  keywords: "graphic design, real estate marketing, social media campaigns, video editing, motion graphics, print design, outdoor media, prepress production, automotive design, Kumar Properties, Adobe Creative Suite, Photoshop, Illustrator, Premiere Pro, After Effects, CorelDRAW, branding, color separation, floor plans, brochures",
  authors: [{ name: "Arun Kavanekar" }],
  openGraph: {
    title: "Arun Kavanekar — Professional Graphic Designer Portfolio",
    description: "6+ years of creative expertise in real estate marketing and automotive industries. Specialized in social media campaigns, video editing, and prepress production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-black text-white overflow-x-hidden cursor-none`}>
        <AnimatedCursor />
        <FloatingElements />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <footer className="relative bg-black border-t border-gray-800 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Arun Kavanekar
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Creating visual experiences that captivate, communicate, and convert. 
                  Specializing in luxury real estate and digital brand storytelling.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect</h4>
                <div className="space-y-2 text-gray-400">
                  <p>arunkavanekar@gmail.com</p>
                  <p>+91 7387925906</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">Behance</a>
                    <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Services</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p>Brand Identity Design</p>
                  <p>Real Estate Marketing</p>
                  <p>Digital Campaign Creation</p>
                  <p>Print & Collateral Design</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-500">&copy; 2025 Arun Kavanekar. All rights reserved. Crafted with passion for design excellence.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
