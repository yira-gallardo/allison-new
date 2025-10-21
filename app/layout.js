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

export const metadata = {
  title: "Allison - Euforia Tour 2025",
  description: "Allison Euforia Tour 2025 - Conciertos, música y más",
  openGraph: {
    title: "Allison - Euforia Tour 2025",
    description: "Allison Euforia Tour 2025 - Conciertos, música y más",
    images: [
      {
        url: "/img/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Allison Euforia Tour 2025",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allison - Euforia Tour 2025",
    description: "Allison Euforia Tour 2025 - Conciertos, música y más",
    images: ["/img/banner.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
