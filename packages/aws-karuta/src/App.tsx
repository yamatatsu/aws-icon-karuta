import React from "react";
import * as icons from "./icons";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {flat(icons).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
}

interface Icons {
  [key: string]: React.FunctionComponent | Icons;
}

const flat = (_icons: Icons): React.FunctionComponent[] =>
  Object.values(_icons).flatMap((val) =>
    typeof val === "function" ? val : flat(val)
  );
