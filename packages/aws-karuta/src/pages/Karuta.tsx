import { useState, useReducer } from "react";
import { _16 } from "../icons/Architecture-Service-Icons_07312022/Arch_Blockchain";

type IconSource = { id: string; name: string; icon: string };
type InitialIcons = Record<string, IconSource>;
type Icon = IconSource & { removed?: true };

type Props = {
  initialIcons: InitialIcons;
  randomSort: <T>(arr: T[]) => T[];
};
export default function Karuta(props: Props) {
  const { icons, correctIcon, handleClickIcon } = useGame(
    props.initialIcons,
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
            <div className="card" style={{ border: 0 }}>
              <img
                data-testid={icon.id}
                onClick={() => handleClickIcon(icon.id)}
                src={icon.icon}
                className="no-border"
                style={{ height: "4em" }}
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

function useGame(initialIcons: InitialIcons, randomSort: <T>(arr: T[]) => T[]) {
  const [icons, removeIcon] = useReducer(
    (icons: Icon[], id: string) =>
      icons.reduce<Icon[]>(
        (acc, icon) => [
          ...acc,
          icon.id === id ? { ...icon, removed: true } : icon,
        ],
        []
      ),
    Object.values(initialIcons)
  );

  const [[correctIcon], next] = useReducer(
    (icons: Icon[]) => icons.slice(1),
    randomSort(Object.values(initialIcons))
  );

  const handleClickIcon = (id: string) => {
    if (id === correctIcon.id) {
      removeIcon(id);
      next();
    } else {
      // TODO: something effect for incorrect click
    }
  };

  return { icons, correctIcon, handleClickIcon };
}

export function randomSort<T>(arr: T[]): T[] {
  return arr.slice().sort(() => (Math.random() < 0.5 ? -1 : 1));
}
