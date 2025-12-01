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
      downloadPdf({ element: resumeRef.current, fileName: "김승래_이력서" });
    }
  }, [searchParams]);

  return (
    <div ref={resumeRef} className="my-12 bg-white p-12 text-black">
      <div className="mb-12">
        <div className="mb-8 flex items-center gap-10">
          <div>
            {/* name */}
            <h2 className="mb-6 text-4xl font-bold">김승래</h2>
            <h3 className="mb-6 text-xl font-semibold">
              최소 동작으로 최대 가치를 제공하는 개발자
            </h3>
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
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/resume_photo.jpg"
            alt="이력서 사진"
            className="w-[200px]"
          />
        </div>

        <div className="space-y-4">
          <p>
            프로덕트를 이용하는 고객이 &quot;최소한의 동작으로 최대한의
            가치&quot;를 경험할 수 있도록 합니다. 이를 위해 스크롤 한 번, 클릭
            한 번에도 의미가 있도록 설계하며, 단순한 사용 편의성을 넘어
            직관적이고 몰입감 있는 경험을 제공하는 것을 지향합니다.
          </p>
          <p>
            이 철학은 단지 사용자 경험에만 국한되지 않습니다. 함께 일하는 동료
            개발자들에게도 같은 원칙을 적용하여 불필요한 복잡함을 줄이고, 누구나
            쉽게 이해하고 유지보수할 수 있는 코드를 작성합니다.
          </p>
          <p>
            더 나은 사용자 경험과 효율적인 협업을 위한 &apos;더 나은
            방법&apos;을 찾기 위해 꾸준히 학습합니다. 단순히 지식을 습득하는 데
            그치지 않고, 직접 구축해 운영 중인 기술 블로그에 배운 내용을
            정리하고 공유하고 있습니다.
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
