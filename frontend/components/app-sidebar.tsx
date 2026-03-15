"use client"

import * as React from "react"

import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"

interface ContentData {
    id: number;
    title: string;
    content: string;
    archived: boolean;
}

interface RawFetchData {
  versions: string[];
  navMain: ContentData[];
}

// This is sample data.
import {sampleData} from "../lib/utils/sampledata.js"

//actual import of data
import {fetchActiveNotes, fetchArchivedNotes, fetchNotesByCategory} from "../services/api.fetch.js"
const rawData: RawFetchData = await fetchActiveNotes() ?? sampleData

// TODO: Convert rawData into actual Data

export const data: RawFetchData = {
  versions: rawData.versions ?? sampleData.versions,
  navMain: rawData.navMain ?? [{title: "Error loading notes"}]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarMenu>
        {data.navMain.map((item) => (
          
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton asChild >
                <a >{item.title}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          
        ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
