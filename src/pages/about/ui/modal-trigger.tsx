import { ReactNode } from "react";

interface ProjectCardProps {
  onModalTriggerClick: () => void;
  children: ReactNode;
}

export default function ModalTrigger({
  onModalTriggerClick,
  children,
}: ProjectCardProps) {
  return (
    <div
      className="cursor-pointer rounded-md border p-4 transition-shadow hover:shadow-lg"
      onClick={onModalTriggerClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onModalTriggerClick();
        }
      }}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}
