import type { Metadata } from "next";
import { Oswald, Arimo } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
});

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kai Digital Studio",
  description: "Custom websites for small businesses & personal brands — visually stunning, user-friendly, and built to convert.",
  openGraph: {
    title: "Kai Digital Studio",
    description: "Custom websites for small businesses & personal brands — visually stunning, user-friendly, and built to convert.",
    url: "https://kai-digital-studio-livid.vercel.app",
    siteName: "Kai Digital Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kai Digital Studio",
    description: "Custom websites for small businesses & personal brands — visually stunning, user-friendly, and built to convert.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${arimo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
