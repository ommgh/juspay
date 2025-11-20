import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Header } from "./header";
import { RightSidebar } from "./right-sidebar";
import Dashboard from "../default";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <AppSidebar side="left" />
      <SidebarInset className="h-full overflow-hidden">
        <Header />
        <Dashboard />
      </SidebarInset>
      <RightSidebar side="right" />
    </SidebarProvider>
  );
};

export default Sidebar;
