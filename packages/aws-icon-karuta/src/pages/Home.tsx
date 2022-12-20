import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="paper" style={{ margin: 0 }}>
      <ul>
        <li>Karuta</li>
        <ul>
          <li className="margin-top-small">Category Icons</li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="karuta/category16">16px</Link>
            <Link to="karuta/category32">32px</Link>
            <Link to="karuta/category48">48px</Link>
            <Link to="karuta/category64">64px</Link>
          </div>

          <li className="margin-top-small">Service icons</li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="karuta/service16">16px</Link>
            <Link to="karuta/service32">32px</Link>
            <Link to="karuta/service48">48px</Link>
            <Link to="karuta/service64">64px</Link>
          </div>

          <li className="margin-top-small">Resource icons</li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="karuta/resource">48px</Link>
          </div>
        </ul>

        <li className="margin-top-small">Icon catalog</li>
        <ul>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="catalog/category16">16px</Link>
            <Link to="catalog/category32">32px</Link>
            <Link to="catalog/category48">48px</Link>
            <Link to="catalog/category64">64px</Link>
          </div>

          <li className="margin-top-small">Service icons</li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="catalog/service16">16px</Link>
            <Link to="catalog/service32">32px</Link>
            <Link to="catalog/service48">48px</Link>
            <Link to="catalog/service64">64px</Link>
          </div>

          <li className="margin-top-small">Resource icons</li>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="catalog/resource">48px</Link>
          </div>
        </ul>
      </ul>
    </div>
  );
}
