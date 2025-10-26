"use client";

import { PROJECT_DATA } from "@/shared/config/project-data";
import { Project } from "@/shared/model/project-data.type";
import { useModal } from "@/shared/lib/context/modal-context";
import ModalTrigger from "@/shared/ui/modal-trigger";
import ProjectCard from "@/entities/project/ui/project-card";
import ProjectDetailModal from "@/features/view-project-detail/ui/project-detail-modal";

export default function ProjectList() {
  const { openModal } = useModal();

  const handleModalTriggerClick = (project: Project) => {
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
