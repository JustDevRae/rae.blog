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
  // TravelMaker
  {
    title: "TravelMaker",
    period: "2024.07 - 2024.09",
    summary: "여행 체험 상품 등록 및 예약 서비스를 제공하는 플랫폼",
    skill: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "Axios",
      "React-Hook-Form",
      "Zod",
      "Zustand",
      "React-Query",
    ],
    githubUrl: "https://github.com/kidnapping-group/TravelMaker",
    deployUrl: "https://travel-maker.netlify.app/",
    description: ["코드잇 FE스프린트에서 5명이 진행한 팀 프로젝트"],
    implements: [
      "공용 Input 컴포넌트 구현",
      "SideBar 구현",
      "내 정보 페이지 구현",
    ],
    projectFunctions: [],
    troubleShootings: [
      {
        title: "반응형 사이드바 렌더링 성능 저하 문제",
        trouble:
          "브라우저 창 크기 조절 시 resize 이벤트의 과도한 호출로 불필요한 렌더링 발생 및 문자열 비교로 인한 가독성 저하.",
        cause: "resize 이벤트를 사용하고, 뷰포트 상태를 문자열로 관리.",
        solution:
          "matchMedia의 'change' 이벤트를 사용하여 불필요한 렌더링을 방지하고, 뷰포트 상태를 boolean 값으로 관리하여 코드 가독성 및 성능 개선.",
      },
    ],
    images: [
      {
        src: "/images/project/travel-maker/m/m_travel-maker-home.png",
        alt: "m_travel-maker-home",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-login.png",
        alt: "m_travel-maker-login",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-setting.png",
        alt: "m_travel-maker-setting",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-reservations.png",
        alt: "m_travel-maker-reservations",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-add-activity1.png",
        alt: "m_travel-maker-add-activity1",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-add-activity2.png",
        alt: "m_travel-maker-add-activity2",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-myactivity.png",
        alt: "m_travel-maker-myactivity",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-reservation_status.png",
        alt: "m_travel-maker-reservation_status",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-activity-detail.png",
        alt: "m_travel-maker-activity-detail",
      },
      {
        src: "/images/project/travel-maker/m/m_travel-maker-activity-list.png",
        alt: "m_travel-maker-activity-list",
      },
    ],
  },
  // Wikid
  {
    title: "Wikid",
    period: "2024.06 - 2024.07",
    summary: "자신과 지인들의 위키를 작성하고 공유하는 서비스 플랫폼",
    skill: [
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "Axios",
      "React-Query",
      "React-Hook-Form",
      "Zod",
      "MantineUI",
    ],
    githubUrl: "https://github.com/JustDevRae/Wikid",
    deployUrl: "https://7team-next-project.vercel.app/",
    description: ["코드잇 FE스프린트에서 5명이 진행한 팀 프로젝트"],
    implements: ["Header 제작", "로그인&회원가입&계정설정페이지 구현"],
    projectFunctions: [],
    troubleShootings: [
      {
        title: "MantineUI Button 스타일 충돌 문제",
        trouble: "MantineUI의 Button 컴포넌트가 hover 시에만 보이는 문제 발생.",
        cause:
          "TailwindCSS의 Preflight 스타일이 Mantine의 variant='filled' 스타일을 덮어쓰는 충돌.",
        solution:
          "tailwind.config.ts에서 Preflight를 비활성화하고, 필요한 Preflight 스타일만 별도 CSS 파일로 적용하여 해결.",
      },
    ],
    images: [
      {
        src: "/images/project/wikid/m/m_wikid-start.png",
        alt: "m_wikid-start",
      },
      {
        src: "/images/project/wikid/m/m_wikid-login.png",
        alt: "m_wikid-login",
      },
      {
        src: "/images/project/wikid/m/m_wikid-wiki-list.png",
        alt: "m_wikid-wiki-list",
      },
      {
        src: "/images/project/wikid/m/m_wikid-post-list.png",
        alt: "m_wikid-post-list",
      },
      {
        src: "/images/project/wikid/m/m_wikid-setting.png",
        alt: "m_wikid-setting",
      },
      {
        src: "/images/project/wikid/m/m_wikid-addborad.png",
        alt: "m_wikid-addborad",
      },
      {
        src: "/images/project/wikid/m/m_wikid-board-detail.png",
        alt: "m_wikid-board-detail",
      },
      {
        src: "/images/project/wikid/m/m_wikid-wiki-detail.png",
        alt: "m_wikid-wiki-detail",
      },
    ],
  },
];
