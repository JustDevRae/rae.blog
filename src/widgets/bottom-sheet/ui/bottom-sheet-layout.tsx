"use client";

import { ReactNode } from "react";
import { cn } from "@/shared/lib/utils/utils";
import { useLongPress } from "@/shared/lib/hooks/useLongPress";

interface BottomSheetLayoutProps {
  children: ReactNode;
}

export default function BottomSheetLayout({
  children,
}: BottomSheetLayoutProps) {
  const {
    isLongPress: isOpenBottomSheet,
    reset,
    longPressProps,
  } = useLongPress();

  const handleCloseBottomSheet = () => {
    reset();
  };

  return (
    <main {...longPressProps} className="relative min-h-screen">
      {children}

      {/* Overlay */}
      {isOpenBottomSheet && (
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
          "fixed bottom-0 left-0 w-full rounded-t-2xl bg-white p-4 shadow-lg transition-all duration-300",
          isOpenBottomSheet
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
