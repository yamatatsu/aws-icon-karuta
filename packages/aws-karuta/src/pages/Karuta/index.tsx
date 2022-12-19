import { useState } from "react";
import useGame, { Props as UseGameProps } from "./useGame";
import FinishModal from "./FinishModal";

type Props = UseGameProps;
export default function Karuta(props: Props) {
  const {
    time,
    icons,
    correctIcon,
    correctCount,
    totalIconCount,
    incorrectClick,
    finish,
    handleClickIcon,
  } = useGame(props);

  const [openFinishModal, setOpenFinishModal] = useState(true);

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "1em",
            padding: "1em",
          }}
        >
          <div>
            <span style={{ fontSize: "1em" }}>Click </span>
            <span style={{ fontSize: "1.5em" }}>{correctIcon.name}</span>
          </div>
          <div style={{ fontSize: "1em" }}>{time}</div>
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
      <FinishModal
        open={finish && openFinishModal}
        time={time}
        correctCount={correctCount}
        totalIconCount={totalIconCount}
        onClose={() => setOpenFinishModal(false)}
      />
    </div>
  );
}

export function randomSort<T>(arr: T[]): T[] {
  return arr.slice().sort(() => (Math.random() < 0.5 ? -1 : 1));
}
