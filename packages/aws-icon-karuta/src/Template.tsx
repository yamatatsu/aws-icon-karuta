import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

type Props = { children?: React.ReactNode };
export default function Template(props: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    ReactGA.send("pageview");
  }, [pathname]);

  return (
    <>
      <NavHeader />
      <div
        className="container"
        style={{
          height: "100svh",
          paddingTop: "5em",
          paddingBottom: "1em",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

function NavHeader() {
  const [open, toggle] = useReducer((open) => !open, false);
  return (
    <nav className="border fixed split-nav">
      <div className="nav-brand">
        <h3>
          <Link to="/">AWS Icon Karuta</Link>
        </h3>
      </div>
      <Menu
        items={[
          <Link to="/menu">Menu</Link>,
          <Link to="/whats-this">What's this?</Link>,
          <a
            target="_blank"
            href="https://github.com/yamatatsu/aws-icon-karuta"
          >
            Github
          </a>,
        ]}
      />
    </nav>
  );
}

function Menu({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="collapsible">
      <Hamburger />
      <div className="collapsible-body">
        <ul className="inline">
          {items.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Hamburger() {
  return (
    <>
      <input id="collapsible1" type="checkbox" name="collapsible1" />
      <label htmlFor="collapsible1">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>
    </>
  );
}
