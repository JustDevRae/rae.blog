"use client";

import { useModal } from "@/shared/lib/context/modal-context";
import { PROJECT_DATA } from "@/shared/config/project-data";
import ProjectCard from "./project-card";
import ProjectDetailModal from "./project-detail-modal";

export default function ProjectCardList() {
  const { openModal } = useModal();

  const handleProjectCardClick = (project: (typeof PROJECT_DATA)[0]) => {
    openModal(
      `project-detail-modal-${project.title}`,
      <ProjectDetailModal project={project} />,
    );
  };

  return (
    <div className="md:grid-cols-2 grid grid-cols-1 gap-4">
      {PROJECT_DATA.map((project) => (
        // 모달 오프너
        <ProjectCard
          key={project.title}
          onProjectCardClick={() => handleProjectCardClick(project)}
        >
          {/* 실질적으로 PostCard에 렌더링되는 정보 */}
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.period}</p>
              <p className="mt-2">{project.summary}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skill.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-gray-200 px-2 py-1 text-sm dark:bg-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ProjectCard>
      ))}
    </div>
  );
}
