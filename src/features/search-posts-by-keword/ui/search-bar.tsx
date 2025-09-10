"use client";

import { Button, Input } from "@/shared/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = inputRef.current?.value.trim() || "";
    const params = new URLSearchParams(searchParams.toString());

    if (searchInput) {
      params.set("q", searchInput);
    } else {
      params.delete("q");
    }

    params.set("page", "1");

    router.push(`?${params.toString()}`);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSearch} className="my-3 flex gap-2">
      <Input
        ref={inputRef}
        type="text"
        placeholder="검색어 입력"
        className="w-full"
      />
      <Button type="submit">검색</Button>
    </form>
  );
}
