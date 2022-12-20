type Props = {
  title: string;
  icons: Record<string, { id: string; name: string; icon: string }>;
};
export default function Catalog(props: Props) {
  return (
    <div className="paper margin-none padding">
      <h2 className="margin-none">{props.title}</h2>
      <div
        className="row flex-center"
        style={{ marginTop: 80, rowGap: 80, columnGap: 8 }}
      >
        {Object.values(props.icons).map((icon) => (
          <div key={icon.id} popover-top={icon.name} style={{ margin: 0 }}>
            <img
              key={icon.id}
              src={icon.icon}
              className="no-border"
              style={{ height: "4em", width: "4em" }}
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
