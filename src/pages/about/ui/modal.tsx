import { ReactNode, useEffect } from "react";
import Portal from "@/shared/ui/portal";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  // 모달이 열려 있을 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Portal>
      {/* 모달 overlay 영역 */}
      <div
        className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClose();
          }
        }}
        role="presentation"
      >
        {/* 모달 콘텐츠 영역 */}
        <div
          className="relative w-3/4 max-w-4xl rounded-md bg-white p-8 dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          role="presentation"
        >
          {/* 모달 닫기 버튼 */}
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
