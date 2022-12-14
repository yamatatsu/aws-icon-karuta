import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="paper">
        <ul>
          <li>Icon catalog</li>
          <ul>
            <li>
              <Link to="catalog/service16">Service icons (size 16)</Link>
            </li>
            <li>
              <Link to="catalog/service32">Service icons (size 32)</Link>
            </li>
            <li>
              <Link to="catalog/service48">Service icons (size 48)</Link>
            </li>
            <li>
              <Link to="catalog/service64">Service icons (size 64)</Link>
            </li>
            <li>
              <Link to="catalog/category16">Category icons (size 16)</Link>
            </li>
            <li>
              <Link to="catalog/category32">Category icons (size 32)</Link>
            </li>
            <li>
              <Link to="catalog/category48">Category icons (size 48)</Link>
            </li>
            <li>
              <Link to="catalog/category64">Category icons (size 64)</Link>
            </li>
            <li>
              <Link to="catalog/resource">Resource icons</Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
}
