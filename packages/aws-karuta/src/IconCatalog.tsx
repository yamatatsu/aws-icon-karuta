type Props = {
  title: string;
  icons: Record<string, { id: string; name: string; icon: string }>;
};
export default function IconCatalog(props: Props) {
  return (
    <div className="paper container">
      <h2>{props.title}</h2>
      <div className="row">
        {Object.entries(props.icons).map(([name, icon]) => (
          <div popover-top={icon.name} style={{ margin: "2em 0.5em" }}>
            <img
              key={icon.id}
              src={icon.icon}
              className="no-border"
              style={{ height: "4em" }}
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
