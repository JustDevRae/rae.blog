"use client";

export default function ResumeDownloadIcon() {
  return (
    <button
      type="button"
      aria-label="Download Resume"
      onClick={() => window.open("/resume?download=true", "_blank")}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="fill-foreground transition hover:fill-[#30B980]"
      >
        <title>Resume</title>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </svg>
    </button>
  );
}
