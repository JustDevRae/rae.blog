"use client";

import { useModal } from "@/shared/lib/context/modal-context";
import ProjectCard from "./project-card";
import ProjectDetailModal from "./project-detail-modal";

export default function ProjectCardList() {
  // 모달 컨텍스트에서 openModal 함수를 가져온다
  const { openModal } = useModal();

  // 프로젝트 카드를 클릭했을 때 모달을 여는 핸들러
  const handleProjectCardClick = () => {
    openModal(
      "project-detail-modal",
      // project의 상세 정보를 보여주는 Modal
      <ProjectDetailModal>
        <p>Project Detail-Contents</p>
      </ProjectDetailModal>,
    );
  };

  return (
    // Project의 개요를 표시하는 project-card ui
    // TODO: project-summary를 children아 아닌 props로 받도록 수정 필요
    <ProjectCard onProjectCardClick={handleProjectCardClick}>
      <p>Project Summary</p>
    </ProjectCard>
  );
}
