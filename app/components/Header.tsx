"use client";

import {
  ArrowDownToLineIcon,
  ArrowUpFromLine,
  ListFilterIcon,
  SettingsIcon,
} from "lucide-react";
import { useState } from "react";
import Search from "./Search";

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  return (
    <div className="flex justify-between items-center bg-zinc-950 col-span-12 px-4 py-2">
      <label className="text-2xl font-bold">Bookmarks</label>
      <div
        className="flex items-center p-2 w-80 cursor-pointer bg-zinc-900"
        onClick={() => setIsOpenSearch(true)}
      >
        <ListFilterIcon size={20} className="mr-2" />
        <div className="text-zinc-500">Search</div>
      </div>
      <div className="flex gap-3">
        <ArrowDownToLineIcon size={20} />
        <ArrowUpFromLine size={20} />
        <SettingsIcon size={20} />
      </div>
      <Search open={isOpenSearch} onClose={setIsOpenSearch} />
    </div>
  );
}
