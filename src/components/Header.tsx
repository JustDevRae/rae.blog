import Link from "next/link";
import ThemeDropdown from "./ThemeDropdown";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-0 flex h-[50px] w-full max-w-[1200px] -translate-x-1/2 transform items-center justify-around px-[30px] font-semibold mobile:justify-between">
      <div>
        <Link href="/" className="hover:text-cyan-400">
          Rae.
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="hover:text-cyan-400">
          Tag
        </Link>
        <Link href="/" className="hover:text-cyan-400">
          About Me
        </Link>
        <ThemeDropdown />
      </div>
    </header>
  );
}
