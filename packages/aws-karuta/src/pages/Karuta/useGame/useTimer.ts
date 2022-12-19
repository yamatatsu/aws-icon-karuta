import { useEffect, useReducer, useState } from "react";

export type Props = {
  ms: number;
};

export default function useTimer({ ms }: Props) {
  const [startAt] = useState(Date.now());
  const now = useNow(startAt);

  return Math.max(0, ms - (now - startAt));
}

function useNow(startAt: number) {
  const [now, setNow] = useState(startAt);

  useEffect(() => {
    const handle = setInterval(() => {
      setNow(Date.now());
    }, 100);

    return () => {
      clearInterval(handle);
    };
  });

  return now;
}
