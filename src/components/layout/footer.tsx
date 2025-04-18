import Github from "@/components/icons/github";
import Gmail from "@/components/icons/gmai";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-3 border-t py-6">
      <div className="flex items-center justify-center gap-3">
        <Github />
        <Gmail />
      </div>
      <p className="text-sm font-semibold">
        &copy;2025. JustDevRae. All rights reserved.
      </p>
    </footer>
  );
}
