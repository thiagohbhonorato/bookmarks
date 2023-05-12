import Card from "./Card";

interface BlocProps {
  data: { name: string; children: any[] };
}

export default function Bloc({ data }: BlocProps) {
  return (
    <div>
      <div className="px-4">{data.name}</div>
      <div className="grid 2xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-4 p-4">
        {data.children.map((item) => {
          return <Card data={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}
