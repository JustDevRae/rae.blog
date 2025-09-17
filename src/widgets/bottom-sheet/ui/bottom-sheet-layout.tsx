"use client";

import { ReactNode, useEffect } from "react";
import { cn } from "@/shared/lib/utils/utils";
import { useLongPress } from "@/shared/lib/hooks/useLongPress";
import useMediaQuery from "@/shared/lib/hooks/uesMediaQuery";

interface BottomSheetLayoutProps {
  children: ReactNode;
}

export default function BottomSheetLayout({
  children,
}: BottomSheetLayoutProps) {
  const { isMobile } = useMediaQuery();
  const {
    isLongPress: isOpenBottomSheet,
    reset,
    longPressProps,
  } = useLongPress();

  const handleCloseBottomSheet = () => {
    reset();
  };

  useEffect(() => {
    if (isMobile && isOpenBottomSheet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile, isOpenBottomSheet]);

  const mobileLongPressProps = isMobile ? longPressProps : null;

  return (
    <main {...mobileLongPressProps} className="scr relative min-h-screen">
      {children}

      {/* Overlay */}
      {isMobile && isOpenBottomSheet && (
        <button
          type="button"
          aria-label="Close Bottom Sheet"
          className="fixed inset-0 bg-black/40 transition-opacity duration-300"
          onClick={handleCloseBottomSheet}
        />
      )}

      {/* Bottom Sheet */}
      <section
        className={cn(
          "fixed bottom-0 left-1/2 w-11/12 -translate-x-1/2 rounded-t-2xl bg-white p-4 transition-all duration-300",
          isMobile && isOpenBottomSheet
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0",
        )}
      >
        <p className="text-center text-gray-700">
          바텀 시트 내부에 작성된 내용.
        </p>
      </section>
    </main>
  );
}
