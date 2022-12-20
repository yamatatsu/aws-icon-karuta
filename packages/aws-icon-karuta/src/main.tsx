import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import ReactGA from "react-ga4";
import "papercss/dist/paper.min.css";
import "./index.css";

ReactGA.initialize("G-437TTP96B1");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
