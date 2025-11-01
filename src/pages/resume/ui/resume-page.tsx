"use client";

import { downloadPdf } from "@/shared/lib/utils/downloadPdf";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const isDownload = searchParams?.get("download") === "true";

    if (isDownload && resumeRef.current) {
      downloadPdf({ element: resumeRef.current, fileName: "이력서" });
    }
  }, [searchParams]);

  return (
    <div ref={resumeRef} className="my-12 bg-white p-12 text-black">
      <div className="mb-12">
        {/* name */}
        <div className="mb-6 flex items-end">
          <h2 className="text-4xl font-bold">
            김승래&nbsp;
            <span className="text-xl font-semibold">
              최소의 동작으로 최대의 만족을 제공하는 개발자
            </span>
          </h2>
        </div>

        {/* contact */}
        <ul className="mb-6 space-y-2">
          <li>
            <span className="font-semibold">Email. </span>ksrae165@gmail.com
          </li>
          <li>
            <span className="font-semibold">Phone. </span>010-2506-9397
          </li>
          <li>
            <span className="font-semibold">GitHub. </span>
            <a
              href="https://github.com/JustDevRae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current"
            >
              https://github.com/JustDevRae
            </a>
          </li>
          <li>
            <span className="font-semibold">Blog. </span>
            <a
              href="https://dev-rae.blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current"
            >
              https://dev-rae.blog/
            </a>
          </li>
        </ul>
        <div className="space-y-4">
          <p>
            정답이 아닌, 현재 상황에서 가장 적합한 해답을 찾는 것을 지향합니다.
            트렌드나 대중적인 선택보다는 프로젝트의 요구사항, 팀의 역량,
            유지보수성을 종합적으로 고려하여 기술적 의사결정을 내립니다.
          </p>
          <p>
            복잡한 기술 개념도 누구나 이해할 수 있도록 풀어서 설명하며, 학습
            과정에서 겪은 시행착오와 해결 방법을 구조화하여 기록합니다. 현재
            기술 블로그를 운영하며 프론트엔드 개발 경험과 인사이트를 꾸준히
            공유하고 있습니다.
          </p>
          <p>
            팀의 문제를 내 일처럼 받아들이고, 적극적인 소통과 피드백을 통해
            해결책을 제안하는 것은 팀의 성장을 야기하고 이는 낙수효과처럼
            개인에게도 성장이 흘러들어온다고 생각합니다.
          </p>
        </div>
      </div>

      {/* project */}
      <div className="mb-12">
        <h2 className="mb-6 pb-2 text-3xl font-bold">Projects</h2>
        {/* modudo */}
        <div className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            Modudo - 소규모 스터디를 위한 투두리스트 서비스 (코드잇)
          </h3>
          <p className="mb-3 text-sm text-gray-600">
            2025.07 - 2025.08 (FE 5 / BE 2 / DE 1)
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              html-react-parser 도입으로 서버로부터 받은 HTML 콘텐츠에서
              스크립트 태그를 정규식으로 제거하고 안전하게 React 컴포넌트로
              렌더링하는 로직 구현을 통해 XSS 공격 취약점 방지
            </li>
            <li>
              자동 토큰 재발급 메커니즘 구현을 통해 엑세스 토큰 만료로 인한 API
              요청 실패 시에도 작업 중단 없이 사용자에게 끊김 없는 인증 경험
              제공
            </li>
            <li>
              Tiptap과 디바운싱 기법을 활용하여 사용자 입력 저장에 해당하는 서버
              API 요청 횟수를 90% 이상 감소시킴과 동시에 작성 중, 저장 완료와
              같은 시각적 피드백을 제공함으로서 사용자 경험을 개선
            </li>
            <li>
              MSW(Mock Service Worker) 도입을 통해 백엔드 API 의존성을
              최소화하는 병렬 개발 환경을 구축하여 개발 기간을 40% 단축
            </li>
          </ul>
          <p className="mt-4">
            <span className="font-semibold">사용 기술</span>: Next.js,
            TypeScript, Tanstack Query, Zustand, MSW, TailwindCSS
          </p>
        </div>
        {/* travel maker */}
        <div className="mb-8">
          <h3 className="mb-2 text-xl font-semibold">
            TravleMaker - 체험 상품 예약 및 리뷰 서비스 (코드잇)
          </h3>
          <p className="mb-3 text-sm text-gray-600">2024.07 - 2024.09 (FE 5)</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              페이지 전환에 필요한 반응형 네비게이션 레이아웃 UI 및 구조 개선을
              통해 사용자 클릭 횟수를 2회에서 1회로 감소시켜 사용자 경험 개선
            </li>
            <li>
              React Hook Form과 Zod를 조합한 공통 Input 컴포넌트 구현을 통해
              데이터 유효성 검사를 통해 제공하는 즉각적인 시각적 피드백으로
              데이터 정확성 및 사용성 강화 및 재사용성과 유지보수 효율 증가에
              20% 기여
            </li>
            <li>
              기존 innerWidth와 resize 이벤트 기반의 화면 너비 감지 커스텀 훅
              로직을 matchMedia와 change 이벤트 방식 변경을로 리사이즈 시
              발생하는 불필요한 이벤트 호출 및 리렌더링을 90% 이상 최소화하여 UI
              반응성을 개선
            </li>
            <li>
              단일 정보 변경 시에도 모든 필드를 필수로 입력해야 하는 기존의 정보
              수정 기능을 초기 데이터 상태와 현재 값 비교를 통한 변경 감지 로직
              구현을 통해 사용자가 원하는 정보만 개별적으로 수정할 수 있도록
              편의성 개선 및 불필요한 API 호출 차단을 통해 시스템 효율성 증가에
              기여
            </li>
          </ul>
          <p className="mt-4">
            <span className="font-semibold">사용 기술</span>: Typescript,
            Next.js, TailwindCSS, Axios, Zustand, Tanstack-Query, pnpm
          </p>
        </div>
      </div>

      {/* skill */}
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold">Skills</h2>
        <p>Next.js, React, JavaScript, TypeScrtpt, HTML, CSS</p>
      </div>

      {/* education */}
      <div>
        <h2 className="mb-2 text-3xl font-bold">Education</h2>
        <ul className="space-y-1">
          <li>코드잇 프론트엔드 단기심화 10기 - 2025.06 ~ 2025.08</li>
          <li>코드잇 프론트엔드 6기 - 2024.03 ~ 2024.09</li>
          <li>명지전문대학교 소프트웨어콘텐츠학과 - 2019.03 ~ 2021.02</li>
        </ul>
      </div>
    </div>
  );
}
