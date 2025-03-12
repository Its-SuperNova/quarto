import type React from "react";
import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Threadly - Modern Clothing Store",
  description: "A modern, clean, and minimalistic e-commerce clothing web app.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body className={inter.className}>
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}
