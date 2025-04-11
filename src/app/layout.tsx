import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: {
    default: "Rae",
    template: "Rae - %s",
  },
  description:
    "학습한 내용에 대해 다른 사람도 쉽게 읽을 수 있도록 공유하는 김승래의 개인 기술 블로그",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rae",
    description: "Rae의 기술 블로그 - 학습한 내용을 기록하고 유합니다.",
    url: "https://rae-blog.vercel.app",
    siteName: "Rae",
    locale: "ko_KR",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col ${inter.className} ${notoSansKR.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mx-auto mb-12 mt-20 flex-grow px-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
