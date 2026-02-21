import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bad Conflict | Combat Robotics",
  description: "Official website for the Bad Conflict combat robotics team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="py-10 text-center text-gray-500 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Bad Conflict Combat Robotics. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
