import Bloc from "./Bloc";
import Card from "./Card";

interface MainProps {
  data: any[];
}

export default function Main({ data }: MainProps) {
  return (
    <div className="main col-span-10 flex-1 bg-neutral-900 overflow-y-auto pt-3">
      {data.map((item, index) => (
        <Bloc data={item} key={index} />
      ))}
    </div>
  );
}
