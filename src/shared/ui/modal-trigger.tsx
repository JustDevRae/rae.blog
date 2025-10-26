import { ReactNode } from "react";

interface ModalTriggerProps {
  onModalTriggerClick: () => void;
  children: ReactNode;
}

export default function ModalTrigger({
  onModalTriggerClick,
  children,
}: ModalTriggerProps) {
  return (
    <div
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
