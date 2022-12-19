import { useEffect, useState } from "react";

export type Props = {
  ms: number;
};

export default function useTimer({ ms }: Props) {
  const [startAt] = useState(Date.now());
  const { now, stop } = useNow(startAt);

  return { time: Math.max(0, ms - (now - startAt)), stop };
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
