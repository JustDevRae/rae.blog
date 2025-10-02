import { GithubIcon, GmailIcon } from "@/shared/ui";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 border-t py-6">
      <div className="flex items-center justify-center gap-3">
        <GithubIcon />
        <GmailIcon />
      </div>
      <p className="text-sm font-semibold">
        &copy;2025. JustDevRae. All rights reserved.
      </p>
    </footer>
  );
}
