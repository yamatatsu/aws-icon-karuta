import { useEffect, useState } from "react";

export default function useTimer() {
  const [startAt] = useState(Date.now());
  const { now, stop } = useNow(startAt);

  const rawTime = now - startAt;

  return { time: formatTime(rawTime), rawTime, stop };
}

function useNow(startAt: number) {
  const [now, setNow] = useState(startAt);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;

    const handle = setInterval(() => {
      setNow(Date.now());
    }, 100);

    return () => {
      clearInterval(handle);
    };
  }, [stopped]);

  return { now, stop: () => setStopped(true) };
}

function formatTime(ms: number) {
  const totalSec = Math.floor(ms / 1_000);

  const min = Math.floor(totalSec / 60).toString();
  const sec = Math.floor(totalSec % 60).toString();
  return `${min}:${sec.padStart(2, "0")}`;
}
