"use client";

import Link from "next/link";
import Favicon from "../Favicon";

import {
  CopyIcon,
  CopyPlusIcon,
  EditIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import ContextMenu, { ContextMenuItem } from "../ContextMenu";

interface CardProps {
  data: any;
}

export default function Card({ data }: CardProps) {
  const onItemAction = (item: ContextMenuItem) => {
    alert(item.text);
  };

  const items: ContextMenuItem[] = [
    { text: "New", icon: <PlusIcon size={16} />, action: onItemAction },
    {
      text: "Duplicate",
      icon: <CopyPlusIcon size={16} />,
      action: onItemAction,
    },
    { text: "Edit", icon: <EditIcon size={16} />, action: onItemAction },
    { text: "Remove", icon: <TrashIcon size={16} />, action: onItemAction },
    { separator: true },
    { text: "Copy URL", icon: <CopyIcon size={16} />, action: onItemAction },
  ];

  return (
    <ContextMenu items={items}>
      <Link
        href={data.link}
        target="_blank"
        className="bg-neutral-800 h-12 px-2 py-1 flex items-center"
      >
        <Favicon data={data} size={16} className="mr-2" />
        <label className="line-clamp-2 cursor-pointer">{data.name}</label>
      </Link>
    </ContextMenu>
  );
}
