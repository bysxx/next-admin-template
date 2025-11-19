"use client";

import { NavDocuments } from "@requests/components/nav-documents";
import { NavMain } from "@requests/components/nav-main";
import { NavSecondary } from "@requests/components/nav-secondary";
import { NavUser } from "@requests/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@requests/components/ui/sidebar";
import {
  ArrowUpCircleIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  PackageIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import type * as React from "react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "대시보드",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "인사 관리",
      url: "#",
      icon: UsersIcon,
      items: [
        {
          title: "직원 관리",
          url: "/hr/employees",
        },
        {
          title: "부서 관리",
          url: "/hr/departments",
        },
      ],
    },
    {
      title: "영업 관리",
      url: "#",
      icon: ShoppingCartIcon,
      items: [
        {
          title: "주문 관리",
          url: "/sales/orders",
        },
        {
          title: "고객 관리",
          url: "/sales/customers",
        },
      ],
    },
    {
      title: "재고 관리",
      url: "#",
      icon: PackageIcon,
      items: [
        {
          title: "품목 관리",
          url: "/inventory/products",
        },
        {
          title: "재고 현황",
          url: "/inventory/stock",
        },
      ],
    },
    {
      title: "시스템 관리",
      url: "#",
      icon: SettingsIcon,
      items: [
        {
          title: "사용자 관리",
          url: "/system/users",
        },
        {
          title: "시스템 설정",
          url: "/system/settings",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "고객 지원",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "검색",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "데이터 라이브러리",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "보고서",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "문서 도우미",
      url: "#",
      icon: FileIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">EnterNext.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
