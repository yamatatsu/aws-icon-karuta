import { useEffect } from "react";
import ReactGA from "react-ga4";
import useGameState, { Props as UseGameStateProps } from "./useGameState";
import useTimer from "./useTimer";
export type { IconState } from "./useGameState";

export type Props = { title: string } & UseGameStateProps;

export default function useGame(props: Props) {
  const { title } = props;

  const [state, tapIcon] = useGameState(props);
  const { time, rawTime, stop } = useTimer();

  const correctIcon = state.questions[state.correctCount];
  const complete = state.questions.length === state.correctCount;

  useEffect(() => {
    gaStart(title);
  });

  useEffect(() => {
    if (complete) {
      stop();
      gaFinish(title, rawTime);
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
      gaClickIcon(title, rawTime);
    },
  };
}

function gaStart(title: string) {
  ReactGA.event({
    category: "Karuta Game",
    action: "Start",
    label: title,
  });
}
function gaFinish(title: string, rawTime: number) {
  ReactGA.event({
    category: "Karuta Game",
    action: "Finish",
    label: title,
    value: rawTime,
  });
}
function gaClickIcon(title: string, rawTime: number) {
  ReactGA.event({
    category: "Karuta Game",
    action: "Click Icon",
    label: title,
    value: rawTime,
  });
}
