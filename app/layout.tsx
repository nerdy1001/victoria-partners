import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bodyFont = Source_Sans_3({ 
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Victoria Partners",
  description: "A sample law firm landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-[#3c3c3c] bg-[#FCFCFE] ${bodyFont.className}`}>
        <Navbar  />
        {children}
      </body>
    </html>
  );
}
