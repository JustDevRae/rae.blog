export const PROJECT_DATA = [
  {
    title: "프로젝트 제목1", // 프로젝트 제목
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
      { src: "/public/profile.png", alt: "Project 1 Image 1" },
      { src: "/public/profile.png", alt: "Project 1 Image 2" },
      { src: "/public/profile.png", alt: "Project 1 Image 3" },
    ],
  },
  {
    title: "두 번째 프로젝트", // 프로젝트 제목
    period: "2024.05 - Aug 2024.08", // 프로젝트 기간
    summary: "두 번째 프로젝트의 간략한 설명입니다.", // 간단한 요약
    skill: ["Vue", "JavaScript", "SCSS"], // 사용된 기술 스택

    githubUrl: "https://github.com/second-project", // 깃허브 URL
    deployUrl: "https://second-project.vercel.app", // 배포 URL

    description: "이 프로젝트는 Vue.js와 JavaScript를 사용하여 개발되었습니다.", // 프로젝트 상세 설명
    implements: ["반응형 UI 구현", "API 연동", "상태 관리 도입"], // 구현 내용 목록
    troubleShooting: {
      title: "Project 2 Challenge", // 문제 해결 제목
      trouble: "데이터 동기화 문제 발생.", // 문제 상황
      cause: "여러 컴포넌트에서 동일한 데이터를 독립적으로 수정하여 발생.", // 원인 분석
      solution: "Vuex를 도입하여 중앙 집중식 상태 관리를 통해 해결.", // 해결 방법
    },
    images: [
      { src: "/public/profile.png", alt: "Project 2 Image 1" },
      { src: "/public/profile.png", alt: "Project 2 Image 2" },
      { src: "/public/profile.png", alt: "Project 2 Image 3" },
    ],
  },
];
