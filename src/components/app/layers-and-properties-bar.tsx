import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Text,
  EyeIcon,
  Italic,
  Underline,
  ImageIcon,
  Circle,
  Folder,
  Plus,
  Minus,
  Copy,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

const LayersAndPropertiesBar = ({
  layers,
  selectedLayer,
  setSelectedLayer,
  properties,
  handlePositionChange,
  handleSizeChange,
  activeTool,
}: {
  layers: any;
  selectedLayer: any;
  setSelectedLayer: any;
  properties: any;
  handlePositionChange: any;
  handleSizeChange: any;
  activeTool: any;
}) => {
  return (
    <div className="w-64 bg-[#2a2a2a] border-l border-[#3a3a3a] flex flex-col">
      {/* Properties Panel */}
      <div className="border-b border-[#3a3a3a]">
        <div className="flex items-center justify-between p-2">
          <div className="font-medium text-sm">Properties</div>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-3">
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="text-xs text-gray-400">Position</div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs">X:</span>
                  <input
                    type="text"
                    value={properties.position.x}
                    onChange={handlePositionChange("x")}
                    className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">Y:</span>
                  <input
                    type="text"
                    value={properties.position.y}
                    onChange={handlePositionChange("y")}
                    className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-gray-400">Size</div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-xs">W:</span>
                  <input
                    type="text"
                    value={properties.size.width}
                    onChange={handleSizeChange("width")}
                    className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">H:</span>
                  <input
                    type="text"
                    value={properties.size.height}
                    onChange={handleSizeChange("height")}
                    className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                  />
                </div>
              </div>
            </div>
            {activeTool === "text" && (
              <div className="space-y-1">
                <div className="text-xs text-gray-400">Text</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Bold className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Italic className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Underline className="h-3 w-3" />
                  </Button>
                  <Separator orientation="vertical" className="h-5 mx-1" />
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <AlignLeft className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <AlignCenter className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <AlignRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Layers Panel */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-2">
          <div className="font-medium text-sm">Layers</div>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-1 space-y-1">
            {layers.map(
              (layer: {
                id: string;
                name: string;
                visible: boolean;
                locked: boolean;
                type: string;
              }) => (
                <div
                  key={layer.id}
                  className={`flex items-center p-1 rounded ${selectedLayer === layer.id ? "bg-blue-900/30" : "hover:bg-[#3a3a3a]"}`}
                  onClick={() => setSelectedLayer(layer.id)}
                >
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <EyeIcon className="h-3 w-3" />
                  </Button>
                  {layer.type === "text" && <Text className="h-4 w-4 mr-1" />}
                  {layer.type === "image" && (
                    <ImageIcon className="h-4 w-4 mr-1" />
                  )}
                  {layer.type === "shape" && (
                    <Circle className="h-4 w-4 mr-1" />
                  )}
                  <span className="text-xs flex-1 truncate">{layer.name}</span>
                </div>
              ),
            )}
          </div>
        </ScrollArea>
        <div className="flex border-t border-[#3a3a3a]">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none flex-1"
          >
            <Folder className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none flex-1"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none flex-1"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none flex-1"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none flex-1"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LayersAndPropertiesBar;
