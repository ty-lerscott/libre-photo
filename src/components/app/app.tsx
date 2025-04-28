"use client";

import { useState, useReducer } from "react";

import MenuBar from "@/components/app/menu-bar";
import ToolBar from "@/components/app/tool-bar";
import DocumentsBar from "@/components/app/documents-bar";
import Canvas from "@/components/app/canvas";
import StatusBar from "@/components/app/status-bar";
import LayersAndPropertiesBar from "@/components/app/layers-and-properties-bar";

const initialProperties = {
  position: { x: 100, y: 150 },
  size: { width: 800, height: 600 },
};

const propertiesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "updatePosition":
      return {
        ...state,
        position: {
          ...state.position,
          [action.payload[0]]: action.payload[1],
        },
      };
    case "updateSize":
      return {
        ...state,
        size: {
          ...state.size,
          [action.payload[0]]: action.payload[1],
        },
      };
  }
};

const layers = [
  {
    id: "Layer 1",
    name: "Background",
    visible: true,
    locked: false,
    type: "image",
  },
  {
    id: "Layer 2",
    name: "Text Layer",
    visible: true,
    locked: false,
    type: "text",
  },
  {
    id: "Layer 3",
    name: "Shape Layer",
    visible: true,
    locked: false,
    type: "shape",
  },
];

export default function LibrePhoto() {
  const [activeTool, setActiveTool] = useState("move");
  const [showRulers, setShowRulers] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [properties, dispatch] = useReducer(
    propertiesReducer,
    initialProperties,
  );
  const [selectedLayer, setSelectedLayer] = useState("Layer 1");

  const handlePositionChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "updatePosition", payload: [key, e.target.value] });
    };

  const handleSizeChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "updateSize", payload: [key, e.target.value] });
    };

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
          <DocumentsBar />

          {/* Canvas Area */}
          <Canvas showRulers={showRulers} zoom={zoom}>
            {/* Right Panel */}
            <LayersAndPropertiesBar
              layers={layers}
              selectedLayer={selectedLayer}
              setSelectedLayer={setSelectedLayer}
              properties={properties}
              handlePositionChange={handlePositionChange}
              handleSizeChange={handleSizeChange}
              activeTool={activeTool}
            />
          </Canvas>

          {/* Status Bar */}
          <StatusBar
            zoom={zoom}
            setZoom={setZoom}
            setShowRulers={setShowRulers}
            showRulers={showRulers}
          />
        </div>
      </div>
    </div>
  );
}
