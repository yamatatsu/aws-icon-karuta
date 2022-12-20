import { Link } from "react-router-dom";

export default function WhatsThis() {
  return (
    <div className="container container-xs">
      <h1>What's This</h1>
      <p>
        AWS Icon Karuta is a game in which you quickly determine and tap a AWS
        icon from a AWS service name.
      </p>

      <h1>What's Karuta</h1>
      <p>
        Karuta is Japanese traditional card game.{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Karuta">
          [Wikipedia]
        </a>
      </p>
      <p>
        The basic idea is to be able to quickly determine which card out of an
        array of cards is required and then to tap the card before it is tapped
        by an opponent.
      </p>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <h4>
          <Link to="/">{">> "}Home</Link>
        </h4>
      </div>
    </div>
  );
}
