import React from "react";
import { Link } from "react-router-dom";

type Props = { children?: React.ReactNode };
export default function App(props: Props) {
  return (
    <>
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <Link to="/">Icon Karuta</Link>
          </h3>
        </div>
        <div className="collapsible">
          <div className="collapsible-body">
            <ul className="inline">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "5em" }}>
        {props.children}
      </div>
    </>
  );
}
