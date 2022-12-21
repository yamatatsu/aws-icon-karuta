import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="container paper"
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "3rem",
      }}
    >
      <h1 className="margin-none">AWS Icon Karuta</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Link className="paper-btn" to="/menu">
          <h3 className="margin-none">Game Start</h3>
        </Link>
        <Link className="paper-btn" to="/whats-this">
          <h3 className="margin-none">What's this?</h3>
        </Link>
      </div>
    </div>
  );
}
