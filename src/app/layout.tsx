import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "rae.blog",
  description: "created Next.js + MDX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col items-center justify-center bg-red-300">
        <Header />
        {children}
      </body>
    </html>
  );
}
