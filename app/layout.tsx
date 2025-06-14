import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Header } from "./components/Header";
import "./styles/index.scss";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SearchProvider } from "./contexts/SearchContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="google-adsense-account" content="ca-pub-6528930048381549" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6528930048381549"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable}`}>
        <LanguageProvider>
          <SearchProvider>
            <Header />
            <div className="main-container">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
            <Footer />
          </SearchProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
