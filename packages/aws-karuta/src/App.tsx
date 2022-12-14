import * as icons from "./icons";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>Service 16 icons</h2>
        {flat(icons.service16Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>
      <div>
        <h2>Service 32 icons</h2>
        {flat(icons.service32Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>
      <div>
        <h2>Service 64 icons</h2>
        {flat(icons.service64Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>

      <div>
        <h2>Category 16 icons</h2>
        {flat(icons.category16Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>
      <div>
        <h2>Category 32 icons</h2>
        {flat(icons.category32Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>
      <div>
        <h2>Category 64 icons</h2>
        {flat(icons.category64Icons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>

      <div>
        <h2>Resource icons</h2>
        {flat(icons.resourceIcons).map((icon, index) => (
          <img key={index} src={icon} className="logo react" alt="React logo" />
        ))}
      </div>
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
