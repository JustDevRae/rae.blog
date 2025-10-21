"use client";

import { ReactNode } from "react";
import { useModal } from "@/shared/lib/context/modal-context";

interface ProjectImageModalProps {
  children: ReactNode;
}

export default function ProjectDetailModal({
  children,
}: ProjectImageModalProps) {
  const { openModal } = useModal();

  const handleOpenImageModal = () => {
    openModal(
      "project-image-modal",
      // TODO: chilren으로 project-image-carulsel를 받도록 수정 필요
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Project Image Carulsel</h3>
      </div>,
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* project-detai-content */}
      {children}
      {/* project-image 클릭 시, projec-image-modal이 활성화 */}
      {/* TODO: image-card를 나열 */}
      <button
        type="button"
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        onClick={handleOpenImageModal}
      >
        Image
      </button>
    </div>
  );
}
