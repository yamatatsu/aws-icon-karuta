import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="paper">
      <ul>
        <li>Karuta</li>
        <ul>
          <ListItem to="karuta/service16">Service icons (size 16)</ListItem>
          <ListItem to="karuta/service32">Service icons (size 32)</ListItem>
          <ListItem to="karuta/service48">Service icons (size 48)</ListItem>
          <ListItem to="karuta/service64">Service icons (size 64)</ListItem>
          <ListItem to="karuta/category16">Category icons (size 16)</ListItem>
          <ListItem to="karuta/category32">Category icons (size 32)</ListItem>
          <ListItem to="karuta/category48">Category icons (size 48)</ListItem>
          <ListItem to="karuta/category64">Category icons (size 64)</ListItem>
          <ListItem to="karuta/resource">Resource icons</ListItem>
        </ul>

        <li>Icon catalog</li>
        <ul>
          <ListItem to="catalog/service16">Service icons (size 16)</ListItem>
          <ListItem to="catalog/service32">Service icons (size 32)</ListItem>
          <ListItem to="catalog/service48">Service icons (size 48)</ListItem>
          <ListItem to="catalog/service64">Service icons (size 64)</ListItem>
          <ListItem to="catalog/category16">Category icons (size 16)</ListItem>
          <ListItem to="catalog/category32">Category icons (size 32)</ListItem>
          <ListItem to="catalog/category48">Category icons (size 48)</ListItem>
          <ListItem to="catalog/category64">Category icons (size 64)</ListItem>
          <ListItem to="catalog/resource">Resource icons</ListItem>
        </ul>
      </ul>
    </div>
  );
}

type ListItemProps = { to: string; children?: React.ReactNode };
function ListItem(props: ListItemProps) {
  return (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}
