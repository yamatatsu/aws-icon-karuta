import Modal from "../../components/Modal";

type Props = {
  open: boolean;
  title: string;
  time: string;
  onClose: () => void;
};
export default function FinishModal(props: Props) {
  const { title, time } = props;

  const twitterUrl = new URL("https://twitter.com/intent/tweet");
  twitterUrl.searchParams.set(
    "text",
    `🎉Complete AWS Icon Karuta🎉\n\nMode: ${title}\n\nTime: ${time}\n\n`
  );
  twitterUrl.searchParams.set(
    "url",
    "https://yamatatsu.github.io/aws-icon-karuta"
  );
  twitterUrl.searchParams.set("hashtags", "aws_icon_karuta");

  return (
    <Modal {...props}>
      <div
        className="padding"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="modal-title" style={{ marginBottom: "1rem" }}>
          Complete!
        </h1>
        <h3 className="modal-text">{title}</h3>
        <h3 className="modal-text">Time {time}</h3>
        <a target="_blank" href={twitterUrl.toString()} className="paper-btn">
          Tweet
        </a>
      </div>
    </Modal>
  );
}
