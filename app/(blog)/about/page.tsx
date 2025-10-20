import type { Metadata } from "next";
import AboutPage from "@/views/about/ui/about-page";

export const metadata: Metadata = {
  title: "About",
  description: "개발자 김승래에 대해 소개합니다.",
};

export default function Page() {
  return <AboutPage />;
}
