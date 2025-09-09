"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/shared/lib/hooks/useMounted";
import { Button } from "./ui/button";

export default function ThemeButton() {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
