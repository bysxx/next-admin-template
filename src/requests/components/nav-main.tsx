"use client";

import { ChevronRightIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@requests/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Modules</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <NavMainItem key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavMainItem({
  item,
}: {
  item: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  };
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(item.isActive ?? false);

  React.useEffect(() => {
    if (item.items?.some((subItem) => pathname === subItem.url)) {
      setIsOpen(true);
    }
  }, [pathname, item.items]);

  // 상위 메뉴 활성화 여부 계산
  const isPathMatch = pathname === item.url;
  const hasActiveChild = item.items?.some(
    (subItem) => pathname === subItem.url
  );
  const isActive = isPathMatch || hasActiveChild;

  if (!item.items?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild tooltip={item.title} isActive={isPathMatch}>
          <Link href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        onClick={() => setIsOpen(!isOpen)}
        isActive={isActive}
      >
        {item.icon && <item.icon />}
        <span>{item.title}</span>
        <ChevronRightIcon
          className={`ml-auto transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </SidebarMenuButton>
      {isOpen && (
        <SidebarMenuSub>
          {item.items.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
                <Link href={subItem.url}>
                  <span>{subItem.title}</span>
                </Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}
