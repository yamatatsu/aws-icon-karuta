import React from "react";
import { Link } from "react-router-dom";

type Props = { children?: React.ReactNode };
export default function Template(props: Props) {
  return (
    <>
      <nav className="border fixed split-nav">
        <div className="nav-brand">
          <h3>
            <Link to="/">Icon Karuta</Link>
          </h3>
        </div>
      </nav>
      <div className="container" style={{ marginTop: "5em" }}>
        {props.children}
      </div>
    </>
  );
}
