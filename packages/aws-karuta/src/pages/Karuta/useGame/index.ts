import { useEffect } from "react";
import useGameState, { Props as UseGameStateProps } from "./useGameState";
import useTimer from "./useTimer";

export type Props = UseGameStateProps;

export default function useGame(props: Props) {
  const [state, tapIcon] = useGameState(props);
  const { time, stop } = useTimer({ ms: 60_000 });

  const correctIcon = state.questions[state.correctCount];
  const complete = state.questions.length === state.correctCount;

  useEffect(() => {
    if (complete) {
      stop();
    }
  }, [complete]);

  return {
    time: formatTime(time),
    icons: state.icons,
    correctIcon,
    incorrectClick: state.incorrectClick,
    correctCount: state.correctCount,
    totalIconCount: state.icons.length,
    finish: time === 0 || complete,
    handleClickIcon: (id: string) => {
      tapIcon(id);
    },
  };
}

function formatTime(ms: number) {
  const totalSec = Math.ceil(ms / 1_000);

  const min = Math.floor(totalSec / 60).toString();
  const sec = Math.floor(totalSec % 60).toString();
  return `${min}:${sec.padStart(2, "0")}`;
}
