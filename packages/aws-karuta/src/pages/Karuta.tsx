type Props = {
  title: string;
  icons: Record<string, { id: string; name: string; icon: string }>;
};
export default function Karuta(props: Props) {
  return (
    <div className="paper">
      <div className="row flex-edges" style={{ rowGap: 80 }}>
        {Object.entries(props.icons).map(([name, icon]) => (
          <div popover-top={icon.name} style={{ margin: 0 }}>
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
