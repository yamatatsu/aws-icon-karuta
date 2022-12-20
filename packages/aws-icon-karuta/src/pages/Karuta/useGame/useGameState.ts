import { useReducer } from "react";
import { Icon, IconDict } from "../../../icons";

type IconState = Icon & { removed?: true };

export type Props = {
  initialIconDict: IconDict;
  randomSort: <T>(arr: T[]) => T[];
};

export default function useGameState(props: Props) {
  const { initialIconDict, randomSort } = props;

  const initialIcons = Object.values(initialIconDict);

  const initialState = {
    icons: initialIcons,
    questions: randomSort(initialIcons),
    correctCount: 0,
  };

  return useReducer(reducer, initialState);
}

type State = {
  icons: IconState[];
  questions: IconState[];
  correctCount: number;
  incorrectClick?: { id: string };
};

const reducer = (state: State, id: string): State => {
  const { icons, questions, correctCount } = state;
  const correctIcon = questions[correctCount];

  if (id === correctIcon.id) {
    return {
      ...state,
      icons: setIconState(icons, id, { removed: true }),
      correctCount: correctCount + 1,
    };
  } else {
    return {
      ...state,
      incorrectClick: { id },
    };
  }
};

/**
 * change icon state immutably
 */
function setIconState(
  icons: IconState[],
  id: string,
  newIconState: Partial<IconState>
) {
  return icons.reduce<IconState[]>(
    (acc, icon) => [
      ...acc,
      icon.id === id ? { ...icon, ...newIconState } : icon,
    ],
    []
  );
}
