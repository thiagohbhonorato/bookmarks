"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ChevronDown,
  ChevronRight,
  FolderIcon,
  FolderOpenIcon,
} from "lucide-react";
import { useState } from "react";
import Link from "./Link";

interface FolderProps {
  data: { name: string; children: any[] };
  defaultOpen?: boolean;
}

export default function Folder({ data, defaultOpen = false }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="flex items-center gap-2 px-2 py-1 w-full border border-transparent hover:bg-[#2a273f] hover:text-[#E0DEF2] focus:bg-[#2a273f] focus:border-[#363247] focus:text-[#E0DEF2]">
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        <span className="text-sm text-left">{data.name}</span>
      </Collapsible.Trigger>
      <Collapsible.Content>
        {data.children.map((link, index) => (
          <Link data={link} key={index} />
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
