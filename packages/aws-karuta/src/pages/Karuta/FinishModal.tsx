import Modal from "../../components/Modal";

type Props = {
  open: boolean;
  time: string;
  onClose: () => void;
};
export default function FinishModal(props: Props) {
  return (
    <Modal {...props}>
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
    </Modal>
  );
}
