import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import video from "@/data/video";
import profile from "@/data/profile";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const v =video({ lang: "en" });

export const metadata: Metadata = {  
  title: v.title,
  description: v.subtitle,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: v.title,
    capable: true,
    statusBarStyle: "default",
  },    
  openGraph: {
    title: v.title,
    description: v.subtitle,
    url: "https://eremika.vercel.app",
    siteName: "Clone Netflix | Eremika",
    images: [
      {
        url: "https://eremika.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    title: v.title,
    card: "summary_large_image",
  },
  icons: {
    shortcut: profile.picture,
    icon: profile.picture,
  },  
  authors: [{ name: "Lans The Prodigy", url: "https://eremika.vercel.app" }],
  creator: "Lans The Prodigy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} scroll-y-hidden`}>{children}</body>
    </html>
  );
}
