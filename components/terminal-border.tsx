"use client"

export function TerminalBorder({ side }: { side: "left" | "right" }) {
  return (
    <div className={`fixed ${side === "left" ? "left-0" : "right-0"} top-0 h-full w-16 z-0 pointer-events-none`}>
      <div className="h-full flex flex-col justify-center space-y-8 px-2">
        {/* Terminal Window 1 */}
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-2 border border-primary/20">
          <div className="flex space-x-1 mb-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-primary/40 rounded w-8"></div>
            <div className="h-1 bg-primary/30 rounded w-6"></div>
            <div className="h-1 bg-primary/20 rounded w-7"></div>
          </div>
        </div>

        {/* Code Block */}
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-2 border border-primary/20">
          <div className="space-y-1">
            <div className="h-1 bg-secondary/40 rounded w-full"></div>
            <div className="h-1 bg-secondary/30 rounded w-4"></div>
            <div className="h-1 bg-secondary/40 rounded w-6"></div>
            <div className="h-1 bg-secondary/20 rounded w-5"></div>
          </div>
        </div>

        {/* Terminal Window 2 */}
        <div className="bg-gray-900/20 backdrop-blur-sm rounded-lg p-2 border border-primary/20">
          <div className="flex space-x-1 mb-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-primary/30 rounded w-7"></div>
            <div className="h-1 bg-primary/40 rounded w-5"></div>
            <div className="h-1 bg-primary/20 rounded w-8"></div>
          </div>
        </div>

        {/* Pixel Art Border Elements */}
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-1">
            <div className="w-2 h-2 bg-primary/30 rounded-sm"></div>
            <div className="w-2 h-2 bg-secondary/30 rounded-sm"></div>
            <div className="w-2 h-2 bg-primary/20 rounded-sm"></div>
            <div className="w-2 h-2 bg-secondary/20 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="w-2 h-2 bg-secondary/20 rounded-sm"></div>
            <div className="w-2 h-2 bg-primary/40 rounded-sm"></div>
            <div className="w-2 h-2 bg-secondary/30 rounded-sm"></div>
            <div className="w-2 h-2 bg-primary/20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
