import Link from "next/link";

export default function EasterEgg() {
  return (
    <main className="flex flex-col items-center justify-center">
      <p>Hello! This is Easter Egg Page!</p>
      <div className="flex flex-col">
        <Link href="/easter-egg/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link href="/easter-egg/snake-game">snake-game</Link>
      </div>
    </main>
  );
}
