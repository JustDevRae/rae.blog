import { createContext, useContext } from "react";

interface ModalContextType {
  openModal: (
    id: string,
    content: React.ReactNode,
    onClose?: () => void,
  ) => void;
  closeModal: (id: string) => void;
}

// 모달 컨텍스트 생성
export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

// 모달 컨텍스트를 사용하는 커스텀 훅
export const useModal = () => {
  const context = useContext(ModalContext);

  // 컨텍스트가 정의되지 않았으면 에러 발생
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
