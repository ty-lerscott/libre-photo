import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Undo,
  Redo,
  PanelLeft,
  PanelRight,
  Layers,
  Maximize2,
} from "lucide-react";

const StatusBar = ({
  zoom,
  setZoom,
  showRulers,
  setShowRulers,
}: {
  zoom: number;
  showRulers: boolean;
  setZoom(zoom: number): void;
  setShowRulers(showRulers: boolean): void;
}) => {
  return (
    <div className="h-6 bg-[#2a2a2a] border-t border-[#3a3a3a] flex items-center px-2 text-xs">
      <div className="flex items-center gap-4">
        <div>
          <span className="text-gray-400 mr-1">Zoom:</span>
          <span>{zoom}%</span>
        </div>
        <div className="w-24">
          <Slider
            value={[zoom]}
            min={10}
            max={400}
            step={10}
            onValueChange={(value) => setZoom(value[0])}
            className="h-1"
          />
        </div>
        <div>
          <span className="text-gray-400 mr-1">Document:</span>
          <span>800 x 600 px</span>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <Undo className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <Redo className="h-3 w-3" />
        </Button>
        <Separator orientation="vertical" className="h-4 mx-1" />
        <Button
          variant="ghost"
          size="icon"
          className="h-5 w-5"
          onClick={() => setShowRulers(!showRulers)}
        >
          <PanelLeft className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <PanelRight className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <Layers className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-5 w-5">
          <Maximize2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default StatusBar;
