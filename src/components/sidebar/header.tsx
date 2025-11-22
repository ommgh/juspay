"use client";

import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  PiBellDuotone,
  PiClockCounterClockwiseDuotone,
  PiStarDuotone,
  PiMagnifyingGlass,
} from "react-icons/pi";
import { ThemeToggler } from "@/components/theme-toggler";

export function Header() {
  return (
    <header
      className={cn(
        "flex h-16 items-center justify-between gap-2 border-b px-4 sm:p-4",
      )}
    >
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1" />

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors">
            <PiStarDuotone className="h-4 w-4" />
          </button>

          <nav className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Dashboards
            </span>
            <span className="text-muted-foreground/30">/</span>
            <span className="font-medium text-foreground">Default</span>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative mr-1 hidden sm:block">
          <PiMagnifyingGlass className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70" />
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-48 rounded-md bg-secondary/50 pl-9 pr-10 text-sm outline-none placeholder:text-muted-foreground/70 hover:bg-secondary/80 focus:bg-secondary focus:ring-1 focus:ring-ring transition-colors"
          />
          <div className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-0.5 text-[10px] font-medium text-muted-foreground/70">
            <span className="text-xs">⌘</span>/
          </div>
        </div>

        <ThemeToggler className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors" />

        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors">
          <PiClockCounterClockwiseDuotone className="h-5 w-5" />
        </button>
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors">
          <PiBellDuotone className="h-5 w-5" />
        </button>

        <SidebarTrigger side="right" />
      </div>
    </header>
  );
}
