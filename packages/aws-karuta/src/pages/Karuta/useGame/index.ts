import useGameState, { Props as UseGameStateProps } from "./useGameState";
import useTimer from "./useTimer";

export type Props = UseGameStateProps;

export default function useGame(props: Props) {
  const { icons, correctIcon, incorrectClick, tapIcon } = useGameState(props);

  const time = useTimer({ ms: 60_000 });

  return {
    time,
    icons,
    correctIcon,
    incorrectClick,
    handleClickIcon: (id: string) => {
      tapIcon(id);
    },
  };
}
