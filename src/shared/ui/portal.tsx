import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "../lib/hooks/useMounted";

interface PortalProps {
  children: ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const mounted = useMounted();

  // 브라우저 환경이 아니거나 마운트되지 않았으면 null 반환
  if (typeof window === "undefined" || !mounted) return null;

  // 'portal'이라는 id를 가진 요소 찾기
  const portalElement = document.getElementById("portal");

  // 'portal' 요소가 없으면 새로 생성하여 body에 추가
  if (!portalElement) {
    const newPortalElement = document.createElement("div");
    newPortalElement.id = "portal";
    document.body.appendChild(newPortalElement);
    return createPortal(children, newPortalElement);
  }

  return createPortal(children, portalElement);
}
