import { useState } from "react";
import useGame, { Props as UseGameProps, IconState } from "./useGame";
import FinishModal from "./FinishModal";
import { Icon } from "../../icons";

type Props = UseGameProps;
export default function Karuta(props: Props) {
  const {
    time,
    icons,
    correctIcon,
    incorrectClick,
    complete,
    handleClickIcon,
  } = useGame(props);

  const [openFinishModal, setOpenFinishModal] = useState(true);

  return (
    <div
      className="paper padding-none"
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <PaperHeader correctIcon={correctIcon} time={time} />
      <div
        className="row flex-center margin-none"
        style={{
          columnGap: 8,
          rowGap: 16,
          overflow: "scroll",
        }}
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="margin-none"
            style={{ position: "relative" }}
          >
            <IconCard
              icon={icon}
              shake={icon.id === incorrectClick?.id}
              onClick={() => handleClickIcon(icon.id)}
            />
          </div>
        ))}
      </div>

      <FinishModal
        open={complete && openFinishModal}
        title={props.title}
        time={time}
        onClose={() => setOpenFinishModal(false)}
      />
    </div>
  );
}

function PaperHeader({
  correctIcon,
  time,
}: {
  correctIcon?: Icon;
  time: string;
}) {
  if (!correctIcon) {
    return (
      <div className="row" style={{ justifyContent: "center" }}>
        <div data-testid="completion" style={{ fontSize: "1.5em" }}>
          🎉🎉🎉
        </div>
      </div>
    );
  }

  return (
    <div
      className="padding"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        gap: "1em",
      }}
    >
      <div>
        <span style={{ fontSize: "1em" }}>Click </span>
        <span style={{ fontSize: "1.5em" }}>{correctIcon.name}</span>
      </div>
      <div style={{ fontSize: "1em" }}>{time}</div>
    </div>
  );
}

function IconCard({
  icon,
  shake,
  onClick,
}: {
  icon: IconState;
  shake: boolean;
  onClick: () => void;
}) {
  return (
    <div
      data-testid={icon.id}
      onClick={onClick}
      className={`card ${shake ? "shake" : ""}`}
      style={{ border: 0 }}
    >
      <img
        src={icon.icon}
        className="no-border"
        style={{ height: "4em", width: "4em" }}
        alt={icon.name}
      />
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
  );
}

export function randomSort<T>(arr: T[]): T[] {
  return arr.slice().sort(() => (Math.random() < 0.5 ? -1 : 1));
}
