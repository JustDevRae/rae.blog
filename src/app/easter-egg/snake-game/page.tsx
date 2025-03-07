"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const GRID_SIZE = 10;
const BOARD_SIZE = 350;
const SPEED = 70;

const getRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE)) * GRID_SIZE,
    y: Math.floor(Math.random() * (BOARD_SIZE / GRID_SIZE)) * GRID_SIZE,
  };
};

const INITIAL_SNAKE = [
  { x: 150, y: 150 },
  { x: 150, y: 140 },
  { x: 150, y: 130 },
];

const INITIAL_APPLE = { x: 150, y: 200 };
const INITIAL_DIRECTION = "DOWN";

const VALID_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "w",
  "a",
  "s",
  "d",
];

export default function SnakeGame() {
  const [snake, setSnake] = useState([...INITIAL_SNAKE]);
  const [apple, setApple] = useState({ ...INITIAL_APPLE });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const directionRef = useRef(direction);

  useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (directionRef.current) {
      case "UP":
        head.y -= GRID_SIZE;
        break;
      case "DOWN":
        head.y += GRID_SIZE;
        break;
      case "LEFT":
        head.x -= GRID_SIZE;
        break;
      case "RIGHT":
        head.x += GRID_SIZE;
        break;
      default:
        break;
    }

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= BOARD_SIZE ||
      head.y >= BOARD_SIZE ||
      newSnake.some((body) => body.x === head.x && body.y === head.y)
    ) {
      setRunning(false);
      setHighScore((prevHighScore) => {
        if (score > prevHighScore) {
          localStorage.setItem("highScore", score.toString());
          return score;
        }
        return prevHighScore;
      });

      setSnake([...INITIAL_SNAKE]);
      return;
    }

    newSnake.unshift(head);

    if (head.x === apple.x && head.y === apple.y) {
      setScore((prev) => prev + 100);
      setApple(getRandomPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [apple, score, snake]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!VALID_KEYS.includes(e.key)) return;

    setDirection((prevDirection) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (prevDirection === "DOWN") return prevDirection;
          return "UP";

        case "ArrowDown":
        case "s":
          if (prevDirection === "UP") return prevDirection;
          return "DOWN";

        case "ArrowLeft":
        case "a":
          if (prevDirection === "RIGHT") return prevDirection;
          return "LEFT";

        case "ArrowRight":
        case "d":
          if (prevDirection === "LEFT") return prevDirection;
          return "RIGHT";

        default:
          return prevDirection;
      }
    });

    setRunning(true);
  }, []);

  useEffect(() => {
    if (running) {
      setSnake([...INITIAL_SNAKE]);
      setApple({ ...INITIAL_APPLE });
      setScore(0);
      setDirection(INITIAL_DIRECTION);
    }
  }, [running]);

  useEffect(() => {
    if (running) {
      const interval = setInterval(moveSnake, SPEED);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [running, moveSnake]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="text-xl font-bold">Snake Game</h1>
      <div
        className="relative mt-4 border border-gray-500"
        style={{ width: BOARD_SIZE, height: BOARD_SIZE }}
      >
        {running && (
          <>
            {snake.map((segment, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="absolute bg-green-500"
                style={{
                  width: GRID_SIZE,
                  height: GRID_SIZE,
                  top: segment.y,
                  left: segment.x,
                }}
              />
            ))}
            <div
              className="absolute bg-red-500"
              style={{
                width: GRID_SIZE,
                height: GRID_SIZE,
                top: apple.y,
                left: apple.x,
              }}
            />
          </>
        )}
        {!running && (
          <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-700">
            {snake.length > 0
              ? "Press any arrow key or W,A,S,D to start"
              : `Game Over! Score: ${score}. Press any key to restart.`}
          </div>
        )}
      </div>
      <p className="mt-4">
        Score: {score} | High Score: {highScore}
      </p>
    </div>
  );
}
