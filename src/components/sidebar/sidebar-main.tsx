"use client";

import { ComponentProps } from "react";
import {
  PiIdentificationBadgeDuotone,
  PiFolderDuotone,
  PiShoppingBagOpenDuotone,
  PiBookOpenDuotone,
  PiIdentificationCardDuotone,
  PiUsersThreeDuotone,
  PiNotebookDuotone,
  PiChatsTeardropDuotone,
} from "react-icons/pi";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { SidebarFavorites } from "./nav-favourites";

const data = {
  favourites: [
    { title: "Overview", url: "#" },
    { title: "Projects", url: "#" },
  ],
  secondary: [
    {
      title: "User Profile",
      url: "#",
      icon: PiIdentificationBadgeDuotone,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Projects",
          url: "#",
        },
        {
          title: "Campaigns",
          url: "#",
        },
        {
          title: "Documents",
          url: "#",
        },
        {
          title: "Followers",
          url: "#",
        },
      ],
    },
    {
      title: "Account",
      url: "#",
      icon: PiIdentificationCardDuotone,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Corporate",
      url: "#",
      icon: PiUsersThreeDuotone,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
      icon: PiNotebookDuotone,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Social",
      url: "#",
      icon: PiChatsTeardropDuotone,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  main: [
    {
      title: "e-Commerce",
      url: "#",
      icon: PiShoppingBagOpenDuotone,
      items: [
        {
          title: "Orders",
          url: "/orders",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: PiFolderDuotone,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Online Cources",
      url: "#",
      icon: PiBookOpenDuotone,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex items-center justify-center ">
                  <Avatar>
                    <AvatarImage src="/ByeWind.svg" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                </div>
                <span className="truncate font-medium mt-1">ByeWind</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarFavorites items={data.favourites} />
        <NavMain items={data.main} />
        <NavSecondary items={data.secondary} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
