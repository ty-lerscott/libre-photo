import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import {
    Save,
    Folder,
    Share2,
    FileText,
    Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const MenuBar = () => {
  return <div className="flex items-center justify-between px-4 py-1 bg-[#2a2a2a] border-b border-[#3a3a3a]">
  <div className="flex items-center gap-4">
    <div className="text-purple-400 font-bold">Lp</div>
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-7">
            File
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#2a2a2a] border-[#3a3a3a]">
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Folder className="mr-2 h-4 w-4" />
            <span>Open</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Save className="mr-2 h-4 w-4" />
            <span>Save</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="sm" className="h-7">
        Edit
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Image
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Layer
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Select
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Filter
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        View
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Window
      </Button>
      <Button variant="ghost" size="sm" className="h-7">
        Help
      </Button>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="ghost" size="icon" className="h-7 w-7">
      <Settings className="h-4 w-4" />
    </Button>
    <Button variant="ghost" size="icon" className="h-7 w-7">
      <Share2 className="h-4 w-4" />
    </Button>
  </div>
</div>;
};

export default MenuBar;
