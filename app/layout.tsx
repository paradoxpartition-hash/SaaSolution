import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaSolution SL",
  description: "We are SaaSolutions — a studio of engineers and designers shipping cinematic products for ambitious companies. From commerce to AI agents to connected hardware, we build the things your customers can't stop talking about."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
