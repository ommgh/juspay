import { SidebarMenuItem } from "../ui/sidebar";

export function SidebarFavorites({
  items,
}: {
  items: { title: string; url?: string }[];
}) {
  return (
    <SidebarMenuItem className="pt-3">
      <div className="px-4">
        <div className="flex justify-start gap-8 items-center mb-3">
          <h4 className="text-sm font-medium text-muted-foreground cursor-pointer">
            Favorites
          </h4>
          <span className="text-sm text-muted-foreground/60 cursor-pointer">
            Recently
          </span>
        </div>

        <nav aria-label="favorites" className="space-y-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.url ?? "#"}
              className="group flex items-center gap-4 px-2 py-1 rounded-md hover:bg-muted/50 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-muted-foreground/30" />

              <span className="text-sm leading-tight  text-foreground">
                {it.title}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </SidebarMenuItem>
  );
}
