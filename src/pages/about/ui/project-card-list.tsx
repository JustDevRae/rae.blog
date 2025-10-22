"use client";

import { useModal } from "@/shared/lib/context/modal-context";
import { PROJECT_DATA } from "@/shared/config/project-data";
import ProjectCard from "./project-card";
import ProjectDetailModal from "./project-detail-modal";
import ModalTrigger from "./modal-trigger";

export default function ProjectCardList() {
  const { openModal } = useModal();

  const handleModalTriggerClick = (project: (typeof PROJECT_DATA)[0]) => {
    openModal(
      `project-detail-modal-${project.title}`,
      <ProjectDetailModal project={project} />,
    );
  };

  return (
    <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
      {PROJECT_DATA.map((project) => (
        <ModalTrigger
          key={project.title}
          onModalTriggerClick={() => handleModalTriggerClick(project)}
        >
          <ProjectCard
            title={project.title}
            period={project.period}
            summary={project.summary}
            skill={project.skill}
          />
        </ModalTrigger>
      ))}
    </div>
  );
}
