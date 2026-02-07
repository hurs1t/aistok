import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Stok Analiz AI - Yapay Zeka ile Stok Devrimi",
  description: "Fazla stoğu azaltın, yok satmaları önleyin ve satın alma kararlarınızı yapay zekaya bırakın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
