import React from "react";

export interface ModalProps {
  id: string;
  content: React.ReactNode;
  onClose?: () => void;
}
