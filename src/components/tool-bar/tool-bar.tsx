import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
    Hand,
    Move,
    Type,
    Square,
    ZoomIn,
    EyeIcon,
    PenTool,
    CropIcon,
    WandIcon,
    Paintbrush,
  } from "lucide-react"

const tools = [
    { id: "move", icon: Move, tooltip: "Move Tool (V)" },
    { id: "select", icon: Square, tooltip: "Rectangular Marquee Tool (M)" },
    { id: "lasso", icon: PenTool, tooltip: "Lasso Tool (L)" },
    { id: "magic-wand", icon: WandIcon, tooltip: "Magic Wand Tool (W)" },
    { id: "crop", icon: CropIcon, tooltip: "Crop Tool (C)" },
    { id: "eyedropper", icon: EyeIcon, tooltip: "Eyedropper Tool (I)" },
    { id: "brush", icon: Paintbrush, tooltip: "Brush Tool (B)" },
    { id: "text", icon: Type, tooltip: "Type Tool (T)" },
    { id: "hand", icon: Hand, tooltip: "Hand Tool (H)" },
    { id: "zoom", icon: ZoomIn, tooltip: "Zoom Tool (Z)" },
  ]

const ToolBar = ({activeTool, setActiveTool}: {activeTool: string; setActiveTool(id: string): void}) => {
  return <div className="w-12 bg-[#2a2a2a] border-r border-[#3a3a3a] flex flex-col items-center py-2 gap-1">
  <TooltipProvider>
    {tools.map((tool) => (
      <Tooltip key={tool.id}>
        <TooltipTrigger asChild>
          <Button
            variant={activeTool === tool.id ? "secondary" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setActiveTool(tool.id)}
          >
            <tool.icon className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tool.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    ))}
  </TooltipProvider>
</div>;
};

export default ToolBar;
