import { useState, useReducer } from "react";

type IconSource = { id: string; name: string; icon: string };
type InitialIcons = Record<string, IconSource>;
type Icon = IconSource & { removed?: true };

type Props = {
  title: string;
  initialIcons: InitialIcons;
  randomSort: <T>(arr: T[]) => T[];
};
export default function Karuta(props: Props) {
  const { icons, correctIcon, handleClickIcon } = useGame(
    props.initialIcons,
    props.randomSort
  );

  return (
    <>
      <div className="row" style={{ alignItems: "end", gap: "1em" }}>
        <div style={{ fontSize: "1em" }}>Click</div>
        <div style={{ fontSize: "1.5em" }}>{correctIcon.name}</div>
      </div>
      <div className="row flex-edges" style={{ columnGap: 8, rowGap: 16 }}>
        {icons.map((icon) => (
          <div key={icon.id} style={{ position: "relative", margin: 0 }}>
            <img
              onClick={() => handleClickIcon(icon.id)}
              src={icon.icon}
              className="no-border"
              style={{ height: "4em" }}
              alt={icon.name}
            />
            {icon.removed && (
              <div
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
    </>
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
