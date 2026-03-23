import type { Metadata } from "next";
import { Noto_Sans_Kannada, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kannadaFont = Noto_Sans_Kannada({
  variable: "--font-kannada",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ODEE (ಓದಿ) - One Destination for Education & Excellence",
  description: "AI-powered goal-based micro-learning platform for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${kannadaFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
