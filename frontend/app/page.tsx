import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Minus, Plus, Save, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"/>
          <input
            type="text"
            placeholder="Title"
            value="Note 1"
            className="h-8 w-full rounded-lg p-2 text-black"
          />
          <button className="h-8 w-8 rounded-lg bg-muted/50">
            <Save className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="h-8 w-8 rounded-lg bg-muted/50">
            <Search className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="h-8 w-8 rounded-lg bg-muted/50">
            <Plus className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="h-8 w-8 rounded-lg bg-muted/50">
            <Minus className="h-4 w-4 text-muted-foreground" />
          </button>

      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="h-full w-full rounded-lg bg-background">
          <textarea className="h-full w-full rounded-lg p-2 text-black"
          value= "This is a Sample Note">
            
          </textarea>
        </div>
      </div>
    </>
  );
}
