import type { ComponentProps } from "react";
import { PiBugBeetle, PiUser, PiBroadcast } from "react-icons/pi";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

const notifications = [
  {
    title: "You have a bug that needs...",
    time: "Just now",
    icon: PiBugBeetle,
    iconColor: "text-gray-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "New user registered",
    time: "59 minutes ago",
    icon: PiUser,
    iconColor: "text-gray-500",
    bgColor: "bg-gray-100",
  },
  {
    title: "You have a bug that needs...",
    time: "12 hours ago",
    icon: PiBugBeetle,
    iconColor: "text-gray-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    icon: PiBroadcast,
    iconColor: "text-gray-500",
    bgColor: "bg-gray-100",
  },
];

const activities = [
  {
    user: "You have a bug that needs...",
    action: "Just now",
    avatar: "https://i.pravatar.cc/150?u=1",
    time: "Just now",
  },
  {
    user: "Released a new version",
    action: "59 minutes ago",
    avatar: "https://i.pravatar.cc/150?u=2",
    time: "59 minutes ago",
  },
  {
    user: "Submitted a bug",
    action: "12 hours ago",
    avatar: "https://i.pravatar.cc/150?u=3",
    time: "12 hours ago",
  },
  {
    user: "Modified A data in Page X",
    action: "Today, 11:59 AM",
    avatar: "https://i.pravatar.cc/150?u=4",
    time: "Today, 11:59 AM",
  },
  {
    user: "Deleted a page in Project X",
    action: "Feb 2, 2023",
    avatar: "https://i.pravatar.cc/150?u=5",
    time: "Feb 2, 2023",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "https://i.pravatar.cc/150?u=6" },
  { name: "Drew Cano", avatar: "https://i.pravatar.cc/150?u=7" },
  { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/150?u=8" },
  { name: "Andi Lane", avatar: "https://i.pravatar.cc/150?u=9" },
  { name: "Kate Morrison", avatar: "https://i.pravatar.cc/150?u=10" },
  { name: "Koray Okumus", avatar: "https://i.pravatar.cc/150?u=11" },
];

export function RightSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarRail />
      <SidebarContent>
        <div className="flex flex-col gap-8 p-4 pt-6">
          <div>
            <h3 className="mb-4 text-sm font-semibold leading-none text-foreground">
              Notifications
            </h3>
            <div className="flex flex-col gap-4">
              {notifications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${item.bgColor}`}
                  >
                    <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="line-clamp-2 text-sm font-medium leading-tight text-foreground">
                      {item.title}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold leading-none text-foreground">
              Activities
            </h3>
            <div className="relative flex flex-col gap-5">
              <div className="absolute left-[15px] top-2 bottom-6 w-px bg-border" />

              {activities.map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 flex items-start gap-3"
                >
                  <img
                    src={item.avatar}
                    alt="User"
                    className="h-8 w-8 shrink-0 rounded-full border border-background bg-background object-cover"
                  />
                  <div className="flex flex-col gap-0.5 pt-0.5">
                    <p className="line-clamp-1 text-sm font-medium leading-tight text-foreground">
                      {item.user}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold leading-none text-foreground">
              Contacts
            </h3>
            <div className="flex flex-col gap-4">
              {contacts.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-8 w-8 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
