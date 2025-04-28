import type { PropsWithChildren } from "react";

const Canvas = ({
  zoom,
  children,
  showRulers,
}: PropsWithChildren<{
  zoom: number;
  showRulers: boolean;
}>) => {
  return (
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
      {children}
    </div>
  );
};

export default Canvas;
