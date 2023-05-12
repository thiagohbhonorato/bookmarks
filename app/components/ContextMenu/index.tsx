import { ReactNode } from "react";
import * as RCM from "@radix-ui/react-context-menu";
import { LinkIcon } from "lucide-react";

export interface ContextMenuItem {
  text?: string;
  icon?: ReactNode;
  keybinds?: string;
  separator?: boolean;
  action?: (item: ContextMenuItem) => void;
}

interface ContextMenuProps {
  children: ReactNode;
  items: ContextMenuItem[];
}

export default function ContextMenu({ children, items }: ContextMenuProps) {
  return (
    <RCM.Root>
      <RCM.Trigger>{children}</RCM.Trigger>
      <RCM.Portal>
        <RCM.Content
          className="flex flex-col bg-neutral-800 shadow-md min-w-[200px] p-2"
          style={{ boxShadow: "0 0 3px 0px rgba(0,0,0,1)" }}
        >
          {items.map((item, index) => {
            if (item.separator) {
              return (
                <RCM.Separator key={index} className="h-px my-1 bg-zinc-200" />
              );
            }
            return (
              <RCM.Item
                className="flex items-center py-0.5 hover:bg-neutral-900 cursor-pointer"
                key={index}
                onClick={() => item.action?.apply(null, [item])}
              >
                <span className="px-2">
                  {item.icon || <LinkIcon size={16} className="invisible" />}
                </span>
                {item.text}
              </RCM.Item>
            );
          })}
        </RCM.Content>
      </RCM.Portal>
    </RCM.Root>
  );
}
