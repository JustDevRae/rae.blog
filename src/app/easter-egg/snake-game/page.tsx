"use client";

import { useEffect, useState, useCallback } from "react";

const GRID_SIZE = 10;
const BOARD_SIZE = 350;
const SPEED = 100;

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

export default function SnakeGame() {
  const [snake, setSnake] = useState([...INITIAL_SNAKE]);
  const [apple, setApple] = useState({ ...INITIAL_APPLE });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
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
        head.x >= BOARD_SIZE ||
        head.y < 0 ||
        head.y >= BOARD_SIZE ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setRunning(false);
        if (score > highScore) {
          localStorage.setItem("highScore", score.toString());
          setHighScore(score);
        }
        return [...INITIAL_SNAKE];
      }

      newSnake.unshift(head);
      if (head.x === apple.x && head.y === apple.y) {
        setScore((prevScore) => prevScore + 100);
        setApple(getRandomPosition());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, apple, score, highScore]);

  useEffect(() => {
    if (running) {
      const interval = setInterval(moveSnake, SPEED);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [running, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const validKeys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "w",
        "a",
        "s",
        "d",
      ];
      if (!validKeys.includes(e.key)) return;
      if (!running) {
        setSnake([...INITIAL_SNAKE]);
        setApple({ ...INITIAL_APPLE });
        setScore(0);
        setDirection(INITIAL_DIRECTION);
        setRunning(true);
      }
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
        case "s":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
        case "a":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
        case "d":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, running]);

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
