"use client"

import { useState } from "react"
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Circle,
  Copy,
  EyeIcon,
  Folder,
  ImageIcon,
  Italic,
  Layers,
  Maximize2,
  Minus,
  MoreHorizontal,
  PanelLeft,
  PanelRight,
  Plus,
  Redo,
  Text,
  Underline,
  Undo
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import MenuBar from "@/components/menu-bar"
import ToolBar from "@/components/tool-bar"

export default function PhotoshopClone() {
  const [activeTool, setActiveTool] = useState("move")
  const [showRulers, setShowRulers] = useState(true)
  const [zoom, setZoom] = useState(100)
  const [selectedLayer, setSelectedLayer] = useState("Layer 1")

  

  const layers = [
    { id: "Layer 1", name: "Background", visible: true, locked: false, type: "image" },
    { id: "Layer 2", name: "Text Layer", visible: true, locked: false, type: "text" },
    { id: "Layer 3", name: "Shape Layer", visible: true, locked: false, type: "shape" },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-gray-200 overflow-hidden">
      {/* Top Menu Bar */}
      <MenuBar />

      {/* Toolbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Toolbar */}
        <ToolBar activeTool={activeTool} setActiveTool={setActiveTool} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Document Tabs */}
          <div className="flex items-center bg-[#2a2a2a] border-b border-[#3a3a3a] px-2">
            <Tabs defaultValue="document1" className="w-full">
              <TabsList className="bg-transparent h-8">
                <TabsTrigger value="document1" className="h-7 data-[state=active]:bg-[#3a3a3a]">
                  document1.psd
                </TabsTrigger>
                <TabsTrigger value="document2" className="h-7 data-[state=active]:bg-[#3a3a3a]">
                  document2.psd
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 relative bg-[#1a1a1a] overflow-auto">
              {/* Rulers */}
              {showRulers && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-4 bg-[#2a2a2a] border-b border-[#3a3a3a] z-10">
                    {/* Horizontal ruler markings */}
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute h-2 border-l border-gray-500"
                        style={{ left: `${i * 50 + 20}px`, bottom: 0 }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 bottom-0 w-4 bg-[#2a2a2a] border-r border-[#3a3a3a] z-10">
                    {/* Vertical ruler markings */}
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute w-2 border-t border-gray-500"
                        style={{ top: `${i * 50 + 20}px`, right: 0 }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-[#2a2a2a] border-r border-b border-[#3a3a3a] z-20" />
                </>
              )}

              {/* Canvas */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="relative bg-white shadow-lg"
                  style={{
                    width: `${(800 * zoom) / 100}px`,
                    height: `${(600 * zoom) / 100}px`,
                    transform: `translate(${showRulers ? "16px" : "0"}, ${showRulers ? "16px" : "0"})`,
                  }}
                >
                  <img
                    src="/placeholder.svg"
                    alt="Canvas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Panels */}
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
                            value="100"
                            className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">Y:</span>
                          <input
                            type="text"
                            value="150"
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
                            value="800"
                            className="w-14 h-6 bg-[#3a3a3a] border border-[#4a4a4a] rounded text-xs px-1"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">H:</span>
                          <input
                            type="text"
                            value="600"
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
                    {layers.map((layer) => (
                      <div
                        key={layer.id}
                        className={`flex items-center p-1 rounded ${selectedLayer === layer.id ? "bg-blue-900/30" : "hover:bg-[#3a3a3a]"}`}
                        onClick={() => setSelectedLayer(layer.id)}
                      >
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <EyeIcon className="h-3 w-3" />
                        </Button>
                        {layer.type === "text" && <Text className="h-4 w-4 mr-1" />}
                        {layer.type === "image" && <ImageIcon className="h-4 w-4 mr-1" />}
                        {layer.type === "shape" && <Circle className="h-4 w-4 mr-1" />}
                        <span className="text-xs flex-1 truncate">{layer.name}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex border-t border-[#3a3a3a]">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none flex-1">
                    <Folder className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none flex-1">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none flex-1">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none flex-1">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none flex-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
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
              <Button variant="ghost" size="icon" className="h-5 w-5" onClick={() => setShowRulers(!showRulers)}>
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
        </div>
      </div>
    </div>
  )
}
