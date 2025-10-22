export const PROJECT_DATA = [
  {
    id: "project-1", // 고유 식별자
    title: "프로젝트 제목", // 프로젝트 제목
    period: "2025.10 - Mar 2025.10", // 프로젝트 기간
    summary: "프로젝트 개요", // 간단한 요약
    skill: ["React", "TypeScript", "TailwindCSS"], // 사용된 기술 스택

    githubUrl: "", // 깃허브 URL
    deployUrl: "", // 배포 URL

    description: "프로젝트에 대한 상세 설명입니다.", // 프로젝트 상세 설명
    implements: [], // 구현 내용 목록
    troubleShooting: {
      title: "Project 1 Troubleshooting", // 문제 해결 제목
      trouble: "Description of the problem faced.", // 문제 상황
      cause: "Analysis of the cause of the problem.", // 원인 분석
      solution: "Description of the solution implemented.", // 해결 방법
    },
    images: [
      { src: "/images/project-1-img-1.png", alt: "Project 1 Image 1" },
      { src: "/images/project-1-img-2.png", alt: "Project 1 Image 2" },
      { src: "/images/project-1-img-3.png", alt: "Project 1 Image 3" },
    ],
  },
];
