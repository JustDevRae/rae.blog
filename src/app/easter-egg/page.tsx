import Link from "next/link";

export default function EasterEgg() {
  return (
    <section className="relative flex flex-col items-center">
      <button type="button" className="absolute right-3 top-3 rounded-md">
        change_background
      </button>
      <section className="flex flex-col items-center text-9xl font-bold">
        <h1>Welcome!</h1>
        <h1>Easter Egg </h1>
        <h1>Page! </h1>
      </section>

      <section className="flex flex-grow gap-10">
        <Link href="/easter-egg/snake-game">
          <div className="flex h-[500px] w-[300px] flex-col items-center justify-center rounded-md border-b-2 bg-blue-700">
            snake-game
          </div>
        </Link>
      </section>
    </section>
  );
}
