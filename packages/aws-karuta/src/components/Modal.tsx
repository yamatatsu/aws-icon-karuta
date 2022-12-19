import { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
export default function Modal(props: Props) {
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
          {props.children}
        </div>
      </div>
    </>
  );
}
