"use client";

import { ChevronRightIcon, type LucideIcon } from "lucide-react";
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

  // 하위 아이템 중 현재 경로와 일치하는 것이 있는지 확인
  const hasActiveChild = item.items?.some(
    (subItem) => pathname === subItem.url
  );

  // 기본 isActive 상태 또는 하위 아이템 활성화 여부에 따라 초기 상태 설정
  // 단, pathname이 변경될 때마다 자동으로 열리게 하려면 useEffect나 파생 상태를 써야 함
  // 여기서는 단순하게 초기 렌더링 및 pathname 변경 시 반응하도록 처리
  const [isOpen, setIsOpen] = React.useState(item.isActive ?? hasActiveChild);

  // pathname이 변경되어 하위 아이템이 활성화되면 자동으로 메뉴를 열도록 동기화
  React.useEffect(() => {
    if (hasActiveChild) {
      setIsOpen(true);
    }
  }, [hasActiveChild]);

  // 상위 메뉴 자체의 활성화 여부 (하위 메뉴가 없을 때 주로 사용)
  const isActive = pathname === item.url || hasActiveChild;

  if (!item.items?.length) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip={item.title}
          isActive={pathname === item.url}
        >
          <a href={item.url}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        onClick={() => setIsOpen(!isOpen)}
        isActive={isActive} // 상위 메뉴 활성화 표시 (선택 사항, 보통 하위 메뉴가 열려있으면 활성화로 볼 수 있음)
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
                <a href={subItem.url}>
                  <span>{subItem.title}</span>
                </a>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}
