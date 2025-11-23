import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/sidebar-main";
import { Header } from "@/components/sidebar/header";
import { SecondarySidebar } from "@/components/sidebar/sidebar-secondary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A Minimal Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar side="left" />
            <SidebarInset className="h-full overflow-hidden">
              <Header />
              {children}
            </SidebarInset>
            <SecondarySidebar side="right" />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
