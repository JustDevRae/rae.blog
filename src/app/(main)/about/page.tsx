import Image from "next/image";

export default function About() {
  return (
    <main>
      <div className="flex items-center gap-5 mobile:flex-col">
        <Image src="/logo.png" alt="logo" width={300} height={300} priority />
        <div className="w-[300px] flex-wrap">
          <p>안녕하세요. </p>
          <p>프론트엔드 개발자 김승래입니다.</p>
        </div>
      </div>
    </main>
  );
}
