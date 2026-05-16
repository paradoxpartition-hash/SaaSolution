import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaSolution SL",
  description: "Building intelligent SaaS infrastructure for modern global businesses."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
