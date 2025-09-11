"use client";

import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface EasterEggTriggerProps {
  children: ReactNode;
}

export function EasterEggTrigger({ children }: EasterEggTriggerProps) {
  const [clickCount, setClickCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    // 클릭이 발생하면 500ms 후에 카운트를 리셋하는 타이머 설정
    if (clickCount > 0) {
      timer = setTimeout(() => setClickCount(0), 500);
    }
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      // 5번 클릭 시 이스터에그 페이지로 이동
      setClickCount(0); // 카운트 즉시 리셋
      router.push("/easter-egg");
    } else if (newCount === 1) {
      // 1번 클릭 시, 500ms의 지연 후 홈으로 이동
      // 이 지연 시간 동안 추가 클릭이 발생하면, 위의 5번 클릭 로직이 우선될 수 있음
      setTimeout(() => {
        // setTimeout이 실행될 때, clickCount가 여전히 1인지 확인하여
        // 다중 클릭 시 홈으로 이동하는 것을 방지
        if (clickCount === 1) {
          router.push("/");
        }
      }, 500);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {children}
    </div>
  );
}
