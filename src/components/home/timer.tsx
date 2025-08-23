"use client";

import { useState, useEffect, useMemo } from "react";

interface TimerProps {
  startFromTimeStamp: number;
}

export default function Timer({ startFromTimeStamp }: Readonly<TimerProps>) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    const diff = Math.floor((startFromTimeStamp - Date.now()) / 1000);
    setSecondsLeft(diff > 0 ? diff : 0);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [startFromTimeStamp]);

  const formattedTime = useMemo(() => {
    if (secondsLeft === null) return "--:--:--";
    const h = Math.floor(secondsLeft / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((secondsLeft % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(secondsLeft % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  }, [secondsLeft]);

  return (
    <div className="flex items-center gap-2 text-2xl font-semibold text-white bg-black px-3 py-1 rounded-lg tracking-widest">
      {formattedTime}
    </div>
  );
}
