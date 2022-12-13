import React from "react";
import * as icons from "./icons";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {flat(icons).map((icon, index) => (
        <img key={index} src={icon} className="logo react" alt="React logo" />
      ))}
    </div>
  );
}

interface Icons {
  [key: string]: string | Icons;
}

const flat = (_icons: Icons): string[] =>
  Object.values(_icons).flatMap((val) =>
    typeof val === "string" ? val : flat(val)
  );
