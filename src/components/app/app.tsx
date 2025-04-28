"use client";

import { useState } from "react";

import MenuBar from "@/components/app/menu-bar";
import ToolBar from "@/components/app/tool-bar";
import DocumentsBar from "@/components/app/documents-bar";
import Canvas from "@/components/app/canvas";
import StatusBar from "@/components/app/status-bar";

export default function LibrePhoto() {
  const [activeTool, setActiveTool] = useState("move");
  const [showRulers, setShowRulers] = useState(true);
  const [zoom, setZoom] = useState(100);

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
          <Canvas showRulers={showRulers} zoom={zoom} activeTool={activeTool} />

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
