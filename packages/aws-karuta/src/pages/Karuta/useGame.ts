import { useReducer } from "react";

type IconSource = { id: string; name: string; icon: string };
type InitialIconDict = Record<string, IconSource>;
type Icon = IconSource & { removed?: true };

export type Props = {
  initialIconDict: InitialIconDict;
  randomSort: <T>(arr: T[]) => T[];
};

export default function useGame(props: Props) {
  const { initialIconDict, randomSort } = props;

  const initialIcons = Object.values(initialIconDict);

  const [state, handleClickIcon] = useReducer(reducer, {
    icons: initialIcons,
    questions: randomSort(initialIcons),
    correctCount: 0,
  });

  const { icons, questions, correctCount, incorrectClick } = state;
  const correctIcon = questions[correctCount];

  return { icons, correctIcon, incorrectClick, handleClickIcon };
}

type State = {
  icons: Icon[];
  questions: Icon[];
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
function setIconState(icons: Icon[], id: string, newIconState: Partial<Icon>) {
  return icons.reduce<Icon[]>(
    (acc, icon) => [
      ...acc,
      icon.id === id ? { ...icon, ...newIconState } : icon,
    ],
    []
  );
}
