import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinguaLift | Personalized Language Learning",
  description:
    "Interactive lessons, adaptive drills, and progress tracking to help you master new languages faster."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
