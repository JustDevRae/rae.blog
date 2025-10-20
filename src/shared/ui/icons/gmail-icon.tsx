"use client";

import { useState } from "react";

export default function GmailIcon() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("ksrae165@gmail.com").then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // 2초 후에 "Copied!" 메시지 비활성화
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopyClick}
      className="relative"
      aria-label="Copy email address"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="fill-foreground transition hover:fill-[#E63F3B]"
      >
        <title>Gmail</title>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>

      {isCopied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-gray-800 px-2 py-1 text-xs text-white">
          Copied!
        </div>
      )}
    </button>
  );
}
