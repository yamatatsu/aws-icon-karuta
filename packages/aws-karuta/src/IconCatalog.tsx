type Props = { title: string; icons: Record<string, string> };
export default function IconCatalog(props: Props) {
  return (
    <div className="paper container">
      <h2>{props.title}</h2>
      <div className="row">
        {Object.entries(props.icons).map(([name, icon]) => (
          <img
            key={name}
            src={icon}
            className="no-border"
            style={{ height: "4em", margin: "0.5em" }}
            alt="React logo"
          />
        ))}
      </div>
    </div>
  );
}
