import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="paper margin-none padding-small"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 className="margin-none">Menu</h2>
      <ul>
        <li>
          <h3 style={{ display: "inline" }}>Karuta</h3>
        </li>
        <ul>
          <li className="margin-top">
            <h4 style={{ display: "inline" }}>Category Icons</h4>
          </li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/karuta/category16">size 16</Link>
            <Link to="/karuta/category32">size 32</Link>
            <Link to="/karuta/category48">size 48</Link>
            <Link to="/karuta/category64">size 64</Link>
          </div>

          <li className="margin-top">
            <h4 style={{ display: "inline" }}>Service icons</h4>
          </li>
          <ul>
            <li className="margin-top-small">Level 1</li>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link to="/karuta/service16Level1">size 16</Link>
              <Link to="/karuta/service32Level1">size 32</Link>
              <Link to="/karuta/service48Level1">size 48</Link>
              <Link to="/karuta/service64Level1">size 64</Link>
            </div>

            <li className="margin-top-small">Level 2</li>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link to="/karuta/service16Level2">size 16</Link>
              <Link to="/karuta/service32Level2">size 32</Link>
              <Link to="/karuta/service48Level2">size 48</Link>
              <Link to="/karuta/service64Level2">size 64</Link>
            </div>

            <li className="margin-top-small">Level 3</li>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link to="/karuta/service16Level3">size 16</Link>
              <Link to="/karuta/service32Level3">size 32</Link>
              <Link to="/karuta/service48Level3">size 48</Link>
              <Link to="/karuta/service64Level3">size 64</Link>
            </div>
          </ul>

          <li className="margin-top">
            <h4 style={{ display: "inline" }}>Resource icons</h4>
          </li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/karuta/resource">size 48</Link>
          </div>
        </ul>

        <li className="margin-top-large">
          <h3 style={{ display: "inline" }}>Icon catalog</h3>
        </li>
        <ul>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/catalog/category16">size 16</Link>
            <Link to="/catalog/category32">size 32</Link>
            <Link to="/catalog/category48">size 48</Link>
            <Link to="/catalog/category64">size 64</Link>
          </div>

          <li className="margin-top">
            <h4 style={{ display: "inline" }}>Service icons</h4>
          </li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/catalog/service16">size 16</Link>
            <Link to="/catalog/service32">size 32</Link>
            <Link to="/catalog/service48">size 48</Link>
            <Link to="/catalog/service64">size 64</Link>
          </div>

          <li className="margin-top">
            <h4 style={{ display: "inline" }}>Resource icons</h4>
          </li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/catalog/resource">size 48</Link>
          </div>
        </ul>
      </ul>
    </div>
  );
}
