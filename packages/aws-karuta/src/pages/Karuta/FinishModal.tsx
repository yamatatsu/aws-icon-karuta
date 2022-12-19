type Props = {
  open: boolean;
  time: string;
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 className="modal-title" style={{ marginBottom: "1rem" }}>
              Finish!
            </h3>
            <p className="modal-text">Time {props.time}</p>
          </div>
        </div>
      </div>
    </>
  );
}
