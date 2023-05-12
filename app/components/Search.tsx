import { ListFilterIcon } from "lucide-react";
import Dialog from "./Dialog";
import { Dispatch, SetStateAction } from "react";
import data from "../data.json";
import Favicon from "./Favicon";
import Link from "next/link";

interface SearchProps {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>> | (() => void);
}

export default function Search({ open, onClose }: SearchProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-[50vw] h-[75vh] px-8 pt-4">
        <div className="flex items-center w-full p-3 mb-4 bg-zinc-900">
          <ListFilterIcon size={20} className="mr-3" />
          <input
            type="text"
            name="search"
            className="bg-transparent outline-none"
            placeholder="Search"
            autoComplete="off"
          />
        </div>
        <Link
          href="https://www.notion.so/"
          className="flex items-center gap-4 py-3"
          target="_blank"
          onClick={() => onClose(false)}
        >
          <Favicon
            data={{
              name: "Notion",
              link: "https://www.notion.so/",
            }}
          />
          <span>Notion</span>
          <span>https://www.notion.so</span>
        </Link>
      </div>
    </Dialog>
  );
}
