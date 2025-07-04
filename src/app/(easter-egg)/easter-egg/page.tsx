import GameCard from "@/components/game-card";
import Netflix from "@/components/thumbnail/netflix";
import { cn } from "@/lib/utils";

export default function EasterEgg() {
  return (
    <div className="my-20 flex flex-col items-center">
      <section className="flex flex-col items-center text-9xl font-bold mobile:text-6xl">
        <h1>Welcome!</h1>
        <h1>To The</h1>
        <h1>Easter Egg </h1>
        <h1>Page! </h1>
      </section>

      <section className="my-20 flex flex-grow flex-col items-center gap-10">
        <h1 className="text-2xl font-bold">Do You Want Play A Game?</h1>

        <GameCard href="/easter-egg/snake-game" title="snake-game">
          <div className={cn("relative h-[300px] w-[300px] overflow-hidden")}>
            {[...Array(8)].map((_, i) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className={cn(
                  "animate-snake absolute h-[10px] w-[10px] bg-green-500",
                )}
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
        </GameCard>
      </section>

      <section className="my-20 flex flex-grow flex-col items-center gap-10">
        <h1 className="text-2xl font-bold">Do you want to watch an OTT?</h1>
        <Netflix />
      </section>
    </div>
  );
}
