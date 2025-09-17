"use client";

import { useState, useCallback, useRef } from "react";
import { LONG_PRESS_DURATION } from "@/shared/config/timing";

export function useLongPress() {
  const [isLongPress, setIsLongPress] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onPressDown = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setIsLongPress(true);
    }, LONG_PRESS_DURATION);
  }, []);

  const onPressUp = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    setIsLongPress(false);
  }, []);

  return {
    isLongPress,
    reset,
    longPressProps: {
      onMouseDown: onPressDown,
      onMouseUp: onPressUp,
      onTouchStart: onPressDown,
      onTouchEnd: onPressUp,
    },
  };
}
