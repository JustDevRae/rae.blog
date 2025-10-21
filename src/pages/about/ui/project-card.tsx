import { ReactNode } from "react";

interface ProjectCardProps {
  onProjectCardClick: () => void;
  children: ReactNode;
}

export default function ProjectCard({
  onProjectCardClick,
  children,
}: ProjectCardProps) {
  return (
    <div
      className="cursor-pointer rounded-md border p-4 transition-shadow hover:shadow-lg"
      onClick={onProjectCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onProjectCardClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
