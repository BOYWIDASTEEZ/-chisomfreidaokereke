import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chisom Freida Okereke | Appointment Setter & Virtual Assistant",
  description:
    "Appointment Setter, Virtual Assistant, Lead Generation, and Customer Support specialist. Helping businesses connect with the right prospects and stay organized through reliable communication.",
  keywords: [
    "Appointment Setter",
    "Virtual Assistant",
    "Lead Generation",
    "Customer Support",
    "Chisom Freida Okereke",
  ],
  openGraph: {
    title: "Chisom Freida Okereke | Appointment Setter & Virtual Assistant",
    description:
      "Appointment Setter, Virtual Assistant, Lead Generation, and Customer Support specialist based in Nigeria, available for remote opportunities.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
