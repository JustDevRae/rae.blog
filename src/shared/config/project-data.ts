import { Project } from "@/shared/model/project-data.type";

export const PROJECT_DATA: Project[] = [
  // Modudo
  {
    title: "Modudo",
    period: "2025.07 - 2025.08",
    summary: "소규모 스터디 팀을 위한 협업 관리 서비스",
    skill: [
      "Next.js",
      "TypeScript",
      "Tanstack Query",
      "Zustand",
      "MSW",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/CODEIT-FESI-10-5/frontend",
    deployUrl: "https://modudo.shop/",
    description: [
      "소규모 스터디를 위한 투두리스트 서비스",
      "공동 목표 설정을 통해 공용 및 개인 투두리스트를 생성하여 관리하고, 팀원들의 진행률 현황을 확인할 수 있는 서비스를 제공합니다",
    ],

    implements: [
      {
        title: "스터디 및 투두리스트 관리 기능 구현",
        detail: "스터디 생성, 초대 및 참여 기능 구현",
      },
    ],

    projectFunctions: [
      "스터디 생성, 초대 및 참여",
      "공용 및 개인 투두리스트 관리",
      "투두별 노트 작성",
      "팀원 간 진행률 실시간 공유",
    ],

    troubleShooting: [
      {
        title: "Project 1 Troubleshooting",
        trouble: "Description of the problem faced.",
        cause: "Analysis of the cause of the problem.",
        solution: "Description of the solution implemented.",
      },
      {
        title: "Project 1 Troubleshooting",
        trouble: "Description of the problem faced.",
        cause: "Analysis of the cause of the problem.",
        solution: "Description of the solution implemented.",
      },
    ],
    images: [
      {
        src: "/images/project/modudo/m/m_modudo_start.png",
        alt: "m_modudo_start",
      },
      {
        src: "/images/project/modudo/m/m_modudo_login.png",
        alt: "m_modudo_login",
      },
      {
        src: "/images/project/modudo/m/m_modudo_dashboard.png",
        alt: "m_modudo_dashboard",
      },
      {
        src: "/images/project/modudo/m/m_modudo_sidebar.png",
        alt: "m_modudo_sidebar",
      },
      {
        src: "/images/project/modudo/m/m_modudo_invite.png",
        alt: "m_modudo_invite",
      },
      {
        src: "/images/project/modudo/m/m_modudo_todo_list.png",
        alt: "m_modudo_todo_list",
      },
      {
        src: "/images/project/modudo/m/m_modudo_note_list.png",
        alt: "m_modudo_note_list",
      },
      {
        src: "/images/project/modudo/m/m_modudo_note_editor.png",
        alt: "m_modudo_note_editor",
      },
      {
        src: "/images/project/modudo/m/m_modudo_setting.png",
        alt: "m_modudo_setting",
      },
    ],
  },
  // other project
  {
    title: "두 번째 프로젝트", // 프로젝트 제목
    period: "2024.05 - Aug 2024.08", // 프로젝트 기간
    summary: "두 번째 프로젝트의 간략한 설명입니다.", // 간단한 요약
    skill: ["Vue", "JavaScript", "SCSS"], // 사용된 기술 스택

    githubUrl: "https://github.com/second-project", // 깃허브 URL
    deployUrl: "https://second-project.vercel.app", // 배포 URL

    description: [
      "이 프로젝트는 Vue.js와 JavaScript를 사용하여 개발되었습니다.",
    ], // 프로젝트 상세 설명
    implements: [
      {
        title: "구현 내용 1",
        detail: "반응형 UI 구현",
      },
      {
        title: "구현 내용 2",
        detail: "API 연동",
      },
      {
        title: "구현 내용 3",
        detail: "상태 관리 도입",
      },
    ], // 구현 내용 목록
    projectFunctions: [],
    troubleShooting: [
      {
        title: "Project 2 Challenge", // 문제 해결 제목
        trouble: "데이터 동기화 문제 발생.", // 문제 상황
        cause: "여러 컴포넌트에서 동일한 데이터를 독립적으로 수정하여 발생.", // 원인 분석
        solution: "Vuex를 도입하여 중앙 집중식 상태 관리를 통해 해결.", // 해결 방법
      },
    ],
    images: [
      { src: "/public/profile.png", alt: "Project 2 Image 1" },
      { src: "/public/profile.png", alt: "Project 2 Image 2" },
      { src: "/public/profile.png", alt: "Project 2 Image 3" },
    ],
  },
];
