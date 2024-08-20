import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import video from "@/data/video";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: video.title,
  description: video.subtitle,
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
    title: video.title,
    capable: true,
    statusBarStyle: "default",
  },
  themeColor: "#000000",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: video.title,
    description: video.subtitle,
    url: "https://example.com",
    siteName: "example.com",
    images: [
      {
        url: "https://example.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    title: video.title,
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
