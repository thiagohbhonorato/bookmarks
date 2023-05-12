import Folder from "./Folder";

interface SideProps {
  data: any[];
}
export default function Side({ data }: SideProps) {
  return (
    <div className="side col-span-2 flex-none bg-neutral-800 overflow-y-auto pt-3">
      {data.map((item, index) => {
        return <Folder data={item} key={index} />;
      })}
    </div>
  );
}
