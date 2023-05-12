import {
  ListFilterIcon,
  SettingsIcon,
  ArrowDownToLineIcon,
  ArrowUpFromLine,
} from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-black col-span-12 px-4 py-2">
      <label className="text-2xl font-bold">Bookmarks</label>
      <div className="flex bg-zinc-900">
        <ListFilterIcon size={20} className="m-2" />
        <input
          name="filter"
          className="bg-transparent p-1 outline-none"
          placeholder="Search"
          autoComplete="off"
          style={{ width: 300 }}
        />
      </div>
      <div className="flex gap-3">
        <ArrowDownToLineIcon size={20} />
        <ArrowUpFromLine size={20} />
        <SettingsIcon size={20} />
      </div>
    </div>
  );
}
