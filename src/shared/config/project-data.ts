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
      "노트 목록 및 노트 작성 페이지 반응형 구현",
      "Tiptap을 통한 리치 텍스트 에디터 구현",
      "Zustand을 이용한 전역 로딩 상태 구현",
    ],

    projectFunctions: [
      "스터디 생성, 초대 및 참여",
      "공용 및 개인 투두리스트 관리",
      "투두별 노트 작성",
      "팀원 간 진행률 실시간 공유",
    ],

    troubleShootings: [
      {
        title: "액세스 토큰 만료로 인한 작업 중단 및 잦은 재로그인",
        trouble:
          "액세스 토큰 만료(401 Error) 시 작업이 강제 중단되고 사용자가 수동으로 재로그인해야 하는 문제 발생. 액세스 토큰 유효기간 1시간 기준, 하루 1회 접속 사용자는 일주일간 최소 7회 재로그인을 경험하여 서비스 신뢰도가 저하됨.",
        cause:
          "초기 HTTP 클라이언트가 API 요청 실패 시 에러를 그대로 반환하는 단순한 구조로 설계되어, 토큰 만료 시 자동 재발급 메커니즘이 없었음. 이로 인해 사용자는 글 저장, 데이터 로드 등 중요한 작업 중 토큰 만료를 직접 경험하게 됨.",
        solution:
          "clientFetch.ts 리팩토링을 통해 401 에러 자동 감지 및 재발급 처리 로직을 구현. 리프레시 토큰으로 새 액세스 토큰을 획득 후 실패했던 요청을 자동 재실행하고, isRefreshing 플래그와 refreshPromise 공유를 통해 레이스 컨디션을 방지. 리프레시 토큰 유효기간 7일 동안 자동 재발급으로 재로그인 횟수를 99% 이상 감소시키고, 중앙 집중식 인증 관리로 유지보수성을 개선함.",
      },
      {
        title: "XSS 공격 취약점 노출",
        trouble:
          "사용자가 TextEditor를 통해 작성한 HTML 문자열을 서버로부터 받아 렌더링하는 NoteItem 컴포넌트에서 악의적인 사용자가 <script> 태그를 이용한 XSS 공격을 시도할 수 있는 보안 취약점 존재.",
        cause:
          "사용자 입력 HTML을 서버에서 받아 그대로 렌더링하는 구조로, 악성 스크립트가 포함된 HTML이 필터링 없이 브라우저에서 실행될 수 있는 환경이었음.",
        solution:
          "html-react-parser 라이브러리를 도입하고 정규식을 통해 서버로부터 받은 HTML 문자열에서 <script> 태그를 모두 제거한 후 렌더링하도록 구현. 악의적인 스크립트 실행을 원천 차단하여 서비스의 보안성과 안정성을 향상시킴.",
      },
      {
        title: "과도한 자동 저장 API 호출로 인한 서버 부하",
        trouble:
          "Tiptap 기반 Rich Text Editor에서 사용자가 타이핑할 때마다 API를 호출할 경우 분당 250회 이상의 요청이 발생하여 서버 부하 증가, 네트워크 트래픽 과부하, 데이터베이스 쓰기 작업 빈번 발생 등 비효율적인 리소스 사용 문제 발생.",
        cause:
          "실시간 자동 저장을 위해 사용자의 모든 키 입력마다 저장 API를 호출하는 단순한 구조로 설계되어, 의미 있는 변경사항이 아닌 단일 키 입력마다 불필요한 저장 작업이 수행됨.",
        solution:
          "디바운싱(Debouncing) 기법을 적용하여 마지막 입력 후 1.5초가 지난 시점에만 저장 API를 호출하도록 설계. 이를 통해 API 요청 횟수를 평균 5~10회로 감소시켜 약 96~98%의 요청 감소를 달성하고, '작성 중...', '자동 저장되었습니다' 등의 시각적 피드백을 제공하여 사용자 경험을 향상시킴.",
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
    implements: ["반응형 UI 구현", "API 연동", "상태 관리 도입"], // 구현 내용 목록
    projectFunctions: [],
    troubleShootings: [
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
