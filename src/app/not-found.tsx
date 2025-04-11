import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <div className="relative flex h-[200px] w-[200px] items-center justify-center">
        <div className="z-10 text-5xl font-extrabold">0</div>

        <div className="animate-orbit absolute left-1/2 top-1/2">
          <div className="-translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold">
            4
          </div>
        </div>

        <div className="animate-orbitReverse absolute left-1/2 top-1/2">
          <div className="-translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold">
            4
          </div>
        </div>
      </div>

      <p className="text-center text-xl font-medium">
        Hey friend, you’re on the wrong path.
      </p>

      <Link
        href="/"
        className="inline-block rounded border border-gray-400 px-4 py-2 font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}
