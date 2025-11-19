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
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "HR",
      url: "#",
      icon: UsersIcon,
      items: [
        {
          title: "Employees",
          url: "/hr/employees",
        },
        {
          title: "Departments",
          url: "/hr/departments",
        },
      ],
    },
    {
      title: "Sales",
      url: "#",
      icon: ShoppingCartIcon,
      items: [
        {
          title: "Orders",
          url: "/sales/orders",
        },
        {
          title: "Customers",
          url: "/sales/customers",
        },
      ],
    },
    {
      title: "Inventory",
      url: "#",
      icon: PackageIcon,
      items: [
        {
          title: "Products",
          url: "/inventory/products",
        },
        {
          title: "Stock",
          url: "/inventory/stock",
        },
      ],
    },
    {
      title: "System",
      url: "#",
      icon: SettingsIcon,
      items: [
        {
          title: "Users",
          url: "/system/users",
        },
        {
          title: "Settings",
          url: "/system/settings",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: DatabaseIcon,
    },
    {
      name: "Reports",
      url: "#",
      icon: ClipboardListIcon,
    },
    {
      name: "Word Assistant",
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
              className="data-[slot=sidebar-menu-button]:!p-1.5"
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
