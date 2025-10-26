"use client";

import { downloadPdf } from "@/shared/lib/utils/downloadPdf";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const isDownload = searchParams?.get("download") === "true";

    if (isDownload && resumeRef.current) {
      downloadPdf({ element: resumeRef.current, fileName: "김승래_이력서" });
    }
  }, [searchParams]);

  return (
    <main ref={resumeRef} className="space-y-4 bg-white p-3 text-black">
      {/* introduce */}
      <section className="flex justify-between border-b-2 border-black pb-3">
        <div className="flex flex-col justify-between">
          {/* name */}
          <div className="flex items-end gap-2">
            <h1 className="text-3xl font-extrabold">김승래</h1>
            <h2 className="text-lg font-bold">Frontend Developer</h2>
          </div>

          {/* contact */}
          <ul className="space-y-1.5">
            <li>
              <span className="font-semibold">Email - </span>ksrae165@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone - </span> 010-2506-9397
            </li>
            <li>
              <span className="font-semibold">Github - </span>
              <a
                href="https://github.com/JustDevRae"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://github.com/JustDevRae
              </a>
            </li>
            <li>
              <span className="font-semibold">Blog - </span>
              <a
                href="https://dev-rae.blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://dev-rae.blog/
              </a>
            </li>
          </ul>
        </div>
        {/* ID photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/resume.png"
          alt="이력서 사진"
          className="h-[176px] w-[137px]"
        />
      </section>

      {/* about-me */}
      <section className="border-b-2 border-black pb-3">
        <h2 className="pb-2 text-2xl font-bold">About Me</h2>
        <ul className="space-y-3">
          <li>
            정답이 아닌, 현재 상황에서 가장 적합한 해답을 찾는 것을 지향합니다.
            트렌드나 대중적인 선택보다는 프로젝트의 요구사항, 팀의 역량,
            유지보수성을 종합적으로 고려하여 기술적 의사결정을 내립니다.
          </li>
          <li>
            복잡한 기술 개념도 누구나 이해할 수 있도록 풀어서 설명하며, 학습
            과정에서 겪은 시행착오와 해결 방법을 구조화하여 기록합니다. 현재
            기술 블로그를 운영하며 프론트엔드 개발 경험과 인사이트를 꾸준히
            공유하고 있습니다.
          </li>
          <li>
            팀의 문제를 내 일처럼 받아들이고, 적극적인 소통과 피드백을 통해
            해결책을 제안하는 것은 팀의 성장을 야기하고 이는 낙수효과처럼
            개인에게도 성장이 흘러들어온다고 생각합니다.
          </li>
        </ul>
      </section>

      {/* skill */}
      <section className="border-b-2 border-black pb-3">
        <h2 className="pb-2 text-2xl font-bold">Skill</h2>
        <div className="flex gap-1">
          Next.js, React, JavaScript, TypeScrtpt, HTML, CSS
        </div>
      </section>

      {/* project */}
      <section className="border-b-2 border-black pb-3">
        <h2 className="pb-2 text-2xl font-bold">Project Expenrience</h2>
        <ul className="flex flex-col gap-4">
          {/* modudo */}
          <li className="space-y-2 pb-3">
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-xl font-semibold">Modudo</h3>
              <time>2025.07 - 2025.08</time>
            </div>
            <p className="pb-2 font-semibold">
              소규모 스터디를 위한 투두리스트 서비스
            </p>
            <span className="font-semibold">Skills: </span>
            <span>
              Next.js, TypeScript, Tanstack Query, Zustand, MSW, TailwindCSS
            </span>
            <ul className="space-y-3">
              <li>
                <h4 className="pb-1 font-semibold">
                  액세스 토큰 만료로 인한 재로그인 문제
                </h4>
                <ul className="list-disc pl-5">
                  <li>
                    액세스 토큰 만료 시 재로그인이 강제되어 사용자 경험 저하
                  </li>
                  <li>토큰 만료 시 자동 재발급 메커니즘 부재</li>
                  <li>
                    HTTP 클라이언트 인터셉터를 이용, 401 에러 시 토큰 자동
                    재발급 및 실패한 요청 재실행 로직 구현
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="font-semibold">XSS 공격 취약점</h4>
                <ul className="list-disc pl-5">
                  <li>
                    리치 텍스트 에디터에 악성 스크립트 주입 시 XSS 공격에 노출
                  </li>
                  <li>서버에서 받은 HTML을 별도 처리 없이 렌더링</li>
                  <li>
                    `html-react-parser`와 정규식을 사용해 렌더링 전 `script`
                    태그 제거
                  </li>
                </ul>
              </li>
              <li>
                <h4 className="font-semibold">에디터 자동 저장 성능 저하</h4>
                <ul className="list-disc pl-5">
                  <li>
                    키 입력마다 API를 호출하여 서버 부하 및 네트워크 트래픽 과다
                    발생
                  </li>
                  <li>모든 입력에 자동 저장 API를 호출하는 비효율적인 구조</li>
                  <li>
                    Debounce 기법으로 API 호출 수를 96% 이상 감소시키고, 시각적
                    피드백으로 UX 개선
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* traver-maker */}
          <li className="space-y-2 pb-3">
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-xl font-semibold">TravelMaker</h3>
              <time>2024.07 - 2024.09</time>
            </div>
            <p className="pb-2 font-semibold">
              여행 체험 상품 등록 및 예약 서비스를 제공하는 플랫폼
            </p>
            <span className="font-semibold">Skills: </span>
            <span>
              Typescript, Next.js, TailwindCSS, Axios, React-Hook-Form, Zod,
              Zustand, React-Query, pnpm
            </span>
            <ul className="space-y-3">
              <li>
                <h4 className="pb-1 font-semibold">
                  반응형 사이드바 렌더링 성능 저하 문제
                </h4>
                <ul className="list-disc pl-5">
                  <li>
                    브라우저 창 크기 조절 시 resize 이벤트의 과도한 호출로
                    불필요한 렌더링 발생 및 문자열 비교로 인한 가독성 저하.
                  </li>
                  <li>
                    resize 이벤트를 사용하고, 뷰포트 상태를 문자열로 관리.
                  </li>
                  <li>
                    matchMedia의 change 이벤트를 사용하여 불필요한 렌더링을
                    방지하고, 뷰포트 상태를 boolean 값으로 관리하여 코드 가독성
                    및 성능 개선.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* wikid */}
          <li className="space-y-2">
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-xl font-semibold">Wikid</h3>
              <time>2024.06 - 2024.07</time>
            </div>
            <p className="pb-2 font-semibold">
              자신과 지인들의 위키를 작성하고 공유하는 서비스 플랫폼
            </p>
            <span className="font-semibold">Skills: </span>
            <span>
              Typescript, Next.js, TailwindCSS, Axios, React-Query,
              React-Hook-Form, Zod, MantineUI
            </span>
            <ul className="space-y-3">
              <li>
                <h4 className="pb-1 font-semibold">
                  MantineUI Button 스타일 충돌 문제
                </h4>
                <ul className="list-disc pl-5">
                  <li>
                    MantineUI의 Button 컴포넌트가 hover 시에만 보이는 문제 발생.
                  </li>
                  <li>
                    TailwindCSS의 Preflight 스타일이 Mantine의
                    variant=&apos;filled&apos; 스타일을 덮어쓰는 충돌.
                  </li>
                  <li>
                    tailwind.config.ts에서 Preflight를 비활성화하고, 필요한
                    Preflight 스타일만 별도 CSS 파일로 적용하여 해결.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* education */}
      <section>
        <h2 className="pb-2 text-2xl font-bold">Education</h2>
        <ul className="list-disc space-y-2 pl-7">
          <li>
            <p className="font-semibold">
              코드잇 프론트엔드 단기심화 10기 - 2025.06 ~ 2025.08
            </p>
          </li>
          <li>
            <p className="font-semibold">
              코드잇 프론트엔드 6기 - 2024.03 ~ 2024.09
            </p>
          </li>
          <li>
            <p className="font-semibold">
              명지전문대학교 소프트웨어콘텐츠학과 - 2019.03 ~ 2021.02
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
