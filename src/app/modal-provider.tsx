"use client";

import { X } from "lucide-react";
import { ReactNode, useCallback, useState, useEffect, useMemo } from "react";
import { ModalContext } from "../shared/lib/context/modal-context";
import Portal from "../shared/ui/portal";
import { ModalProps } from "../shared/model/type";

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<ModalProps[]>([]);

  const openModal = useCallback(
    (id: string, content: ReactNode, onClose?: () => void) => {
      setModals((prevModals) => {
        if (prevModals.some((modal) => modal.id === id)) {
          return prevModals;
        }
        return [...prevModals, { id, content, onClose }];
      });
    },
    [],
  );

  const closeModal = useCallback((id: string) => {
    setModals((prevModals) => {
      const modalToClose = prevModals.find((modal) => modal.id === id);
      modalToClose?.onClose?.(); // 모달이 닫힐 때 실행될 콜백 함수 호출
      return prevModals.filter((modal) => modal.id !== id);
    });
  }, []);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modals.length]);

  return (
    // ModalContext.Provider를 통해 openModal과 closeModal 함수를 하위 컴포넌트에 제공합니다.
    <ModalContext.Provider
      value={useMemo(
        () => ({ openModal, closeModal }),
        [openModal, closeModal],
      )}
    >
      {children}
      {modals.length > 0 && ( // 활성화된 모달이 하나라도 있으면 Portal을 통해 모달들을 렌더링합니다.
        <Portal>
          {modals.map((modal) => (
            // 모달 overlay 영역
            <div
              key={modal.id}
              className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
              onClick={() => closeModal(modal.id)} // 오버레이 클릭 시 해당 모달 닫기
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  closeModal(modal.id);
                }
              }}
              role="presentation"
            >
              {/* 모달 콘텐츠 영역 */}
              <div
                className="relative w-[90%] max-w-4xl rounded-md bg-white p-4 pt-10 dark:bg-[#121212]"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
                role="presentation"
                style={{
                  // 중첩 모달의 경우 z-index를 동적으로 설정하여 가장 최근에 열린 모달이 맨 위에 오도록 함
                  zIndex: 100 + modals.findIndex((m) => m.id === modal.id),
                }} // stacking을 위한 간단한 z-index 설정
              >
                {/* 모달 닫기 버튼 */}
                <button
                  className="absolute right-1.5 top-1.5 rounded-md bg-red-500 p-1 text-white hover:bg-red-700"
                  onClick={() => closeModal(modal.id)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* 모달에 전달된 실제 콘텐츠를 렌더링 */}
                <div className="hide-scrollbar h-[85vh] overflow-y-auto tablet:max-h-[85vh]">
                  {modal.content}
                </div>
              </div>
            </div>
          ))}
        </Portal>
      )}
    </ModalContext.Provider>
  );
}
