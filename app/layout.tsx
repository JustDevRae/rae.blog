import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/header";
import Footer from "@/widgets/footer/ui/footer";
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
  other: {
    "google-site-verification": "vXlQcnd3gLUByrok3BTJkGqKppujxVEXkQWQieVB9G8",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rae",
    description: "Rae의 기술 블로그 - 학습한 내용을 기록하고 유합니다.",
    url: "https://dev-rae.blog",
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
