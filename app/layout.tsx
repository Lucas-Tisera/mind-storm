import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "./components/Header";
import "./styles/index.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SearchProvider } from "./contexts/SearchContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mind Storm - Aprende y Evoluciona",
  description:
    "Explora 'Mind Storm', donde comparto conocimientos y aprendizajes de desarrollo web, tecnología, y productividad.",
  keywords: [
    "Mind Storm",
    "blog de aprendizaje",
    "desarrollo web",
    "tecnología",
    "productividad",
    "Next.js",
    "TypeScript",
    "SaaS",
    "software",
    "programación",
  ],
  authors: [{ name: "Lucas" }],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <SearchProvider>
            <Header />
            <div className="main-container">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
          </SearchProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
