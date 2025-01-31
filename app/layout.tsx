import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";  // Import Tailwind and global styles

// Custom Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page (can be customized)
export const metadata: Metadata = {
  title: "MC Technical-Challenge",
  description: "A React application to display data with interactive features for filtering, searching, and sorting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add meta tags or favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}  {/* This renders the child page content */}
      </body>
    </html>
  );
}
