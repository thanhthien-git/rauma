import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
export default function UserLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="p-10 z-10 ">
        <SidebarProvider className="flex flex-col">
          <div className="relative flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </>
  )
}
