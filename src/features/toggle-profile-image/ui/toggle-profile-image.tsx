"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/utils/utils";

export default function ToggleProfileImage() {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      type="button"
      className="relative order-1 aspect-square w-full cursor-pointer overflow-hidden tablet:order-2 tablet:w-1/3"
      onClick={handleImageClick}
    >
      <Image
        src="/profile2.jpg"
        alt="second profile"
        fill
        className="rounded-full object-fill"
        priority
      />
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-full transition-transform duration-500 ease-in-out",
          isClicked ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <Image
          src="/profile.png"
          alt="first profile"
          fill
          className="rounded-sm object-fill"
          priority
        />
      </div>
    </button>
  );
}
