"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<number | string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const calculateFibonacci = () => {
    setError("");
    setResult(null);

    const num = Number(input);

    const fibonacci = (
      n: number,
      memo: Record<number, number> = {}
    ): number => {
      if (n in memo) return memo[n];
      if (n <= 1) return n;

      memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
      return memo[n];
    };

    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
      setError("Masukkan bilangan bulat positif.");
      return;
    }

    const fibResult = fibonacci(num);
    setResult(fibResult);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
        <h1 className="text-2xl font-bold">
          Fibonacci dengan <br /> Memoization 📚
        </h1>
        <Input
          placeholder="Masukkan angka"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={calculateFibonacci}>Hitung</Button>
        {result !== null && <h2>Hasil: {result}</h2>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </main>
    </div>
  );
}
