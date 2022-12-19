import { useReducer } from "react";
import { _16 } from "../icons/Architecture-Service-Icons_07312022/Arch_Blockchain";

type IconSource = { id: string; name: string; icon: string };
type InitialIconDict = Record<string, IconSource>;
type Icon = IconSource & { removed?: true };

type Props = {
  initialIconDict: InitialIconDict;
  randomSort: <T>(arr: T[]) => T[];
};
export default function Karuta(props: Props) {
  const { icons, correctIcon, incorrectClick, handleClickIcon } = useGame(
    props.initialIconDict,
    props.randomSort
  );

  return (
    <div
      className="paper"
      style={{
        margin: 0,
        padding: "1em 0.5em",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {correctIcon ? (
        <div className="row" style={{ alignItems: "end", gap: "1em" }}>
          <div style={{ fontSize: "1em" }}>Click</div>
          <div style={{ fontSize: "1.5em" }}>{correctIcon.name}</div>
        </div>
      ) : (
        <div className="row" style={{ justifyContent: "center" }}>
          <div data-testid="completion" style={{ fontSize: "1.5em" }}>
            🎉🎉🎉
          </div>
        </div>
      )}
      <div
        className="row flex-center"
        style={{
          margin: 0,
          columnGap: 8,
          rowGap: 16,
          overflow: "scroll",
        }}
      >
        {icons.map((icon) => (
          <div key={icon.id} style={{ position: "relative", margin: 0 }}>
            <div
              data-testid={icon.id}
              onClick={() => handleClickIcon(icon.id)}
              className={`card ${
                icon.id === incorrectClick?.id ? "shake" : ""
              }`}
              style={{ border: 0 }}
            >
              <img
                src={icon.icon}
                className="no-border"
                style={{ height: "4em", width: "4em" }}
                alt={icon.name}
              />
            </div>

            {icon.removed && (
              <div
                data-testid={`${icon.id}_mask`}
                style={{
                  width: "100%",
                  height: "100%",
                  background: "black",
                  opacity: "60%",
                  position: "absolute",
                  top: 0,
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

type State = {
  icons: Icon[];
  questions: Icon[];
  incorrectClick?: { id: string };
};

const reducer = (state: State, id: string): State => {
  const { icons, questions } = state;
  const [correctIcon] = questions;

  if (id === correctIcon.id) {
    return {
      icons: setIconState(state.icons, id, { removed: true }),
      questions: questions.slice(1),
    };
  } else {
    return {
      ...state,
      incorrectClick: { id },
    };
  }
};

function useGame(
  initialIconDict: InitialIconDict,
  randomSort: <T>(arr: T[]) => T[]
) {
  const initialIcons = Object.values(initialIconDict);

  const [state, handleClickIcon] = useReducer(reducer, {
    icons: initialIcons,
    questions: randomSort(initialIcons),
  });

  const { icons, questions, incorrectClick } = state;
  const [correctIcon] = questions;

  return { icons, correctIcon, incorrectClick, handleClickIcon };
}

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

export function randomSort<T>(arr: T[]): T[] {
  return arr.slice().sort(() => (Math.random() < 0.5 ? -1 : 1));
}
