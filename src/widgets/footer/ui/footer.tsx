import { GithubIcon } from "@/shared/ui/icons/github-icon";
import { GmailIcon } from "@/shared/ui/icons/gmail-icon";

export function Footer() {
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
