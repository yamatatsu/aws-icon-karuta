type Props = {
  open: boolean;
  time: string;
  correctCount: number;
  totalIconCount: number;
  onClose: () => void;
};
export default function FinishModal(props: Props) {
  return (
    <>
      <div
        className="modal"
        style={props.open ? { opacity: 1, visibility: "visible" } : {}}
      >
        <label
          className="modal-bg"
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              props.onClose();
            }
          }}
        ></label>
        <div className="modal-body" style={props.open ? { top: "50%" } : {}}>
          <label className="btn-close" onClick={() => props.onClose()}>
            X
          </label>

          <h4 className="modal-title">Finish!</h4>
          <p className="modal-text">Time {props.time}</p>
          <p className="modal-text">
            Correct {props.correctCount}/{props.totalIconCount}
          </p>
        </div>
      </div>
    </>
  );
}
