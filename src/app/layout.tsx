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
  description: "Designer & Web Developer — Creating bold digital experiences that move people.",
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
