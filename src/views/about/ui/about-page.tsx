import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "개발자 김승래에 대해 소개합니다.",
};

export default function AboutPage() {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 tablet:flex-row">
        <Image src="/logo.png" alt="logo" width={300} height={300} priority />
        <div className="w-[300px] flex-wrap">
          <p>안녕하세요. </p>
          <p>프론트엔드 개발자 김승래입니다.</p>
        </div>
      </div>
    </main>
  );
}
