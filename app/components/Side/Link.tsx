import LinkNext from "next/link";
import Favicon from "../Favicon";

interface LinkProp {
  data: any;
}

export default function Link({ data }: LinkProp) {
  return (
    <LinkNext
      href={data.link}
      target="_blank"
      className="flex items-center pl-3 py-1"
    >
      <Favicon data={data} className="mr-2" />
      <label className="line-clamp-1 cursor-pointer">{data.name}</label>
    </LinkNext>
  );
}
