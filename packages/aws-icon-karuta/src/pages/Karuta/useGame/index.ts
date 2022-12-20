import { useEffect } from "react";
import useGameState, { Props as UseGameStateProps } from "./useGameState";
import useTimer from "./useTimer";

export type Props = UseGameStateProps;

export default function useGame(props: Props) {
  const [state, tapIcon] = useGameState(props);
  const { time, stop } = useTimer();

  const correctIcon = state.questions[state.correctCount];
  const complete = state.questions.length === state.correctCount;

  useEffect(() => {
    if (complete) {
      stop();
    }
  }, [complete]);

  return {
    time,
    icons: state.icons,
    correctIcon,
    incorrectClick: state.incorrectClick,
    complete,
    handleClickIcon: (id: string) => {
      tapIcon(id);
    },
  };
}
