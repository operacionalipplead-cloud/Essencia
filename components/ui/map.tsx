import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

export function WorldMap({ 
  dots = [], 
  lineColor = "#568474", // Default sage color
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const map = useMemo(
    () => new DottedMap({ height: 100, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () => map.getSVG({
      radius: 0.22,
      color: "#D1D5DB", 
      shape: "circle",
      backgroundColor: "transparent",
    }),
    [map]
  );

  // Projection logic for standard equirectangular map
  // Map dimensions are conceptually 800x400 for calculations
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2; 
  const fullCycleDuration = totalAnimationTime + pauseTime;

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans overflow-hidden">
      {/* Background Dotted Map Image */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="absolute inset-0 h-full w-full pointer-events-none select-none object-contain opacity-60"
        alt="world map"
        draggable={false}
      />

      {/* SVG Layer for Animated Lines and Dots */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          
          const startTime = (i * staggerDelay) / fullCycleDuration;
          const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
          const resetTime = totalAnimationTime / fullCycleDuration;
          
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={loop ? {
                  pathLength: [0, 0, 1, 1, 0],
                } : {
                  pathLength: 1
                }}
                transition={loop ? {
                  duration: fullCycleDuration,
                  times: [0, startTime, endTime, resetTime, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0,
                } : {
                  duration: animationDuration,
                  delay: i * staggerDelay,
                  ease: "easeInOut",
                }}
              />
              {/* Animation Circle following path */}
              {loop && (
                <motion.circle
                  r="4"
                  fill={lineColor}
                  initial={{ offsetDistance: "0%", opacity: 0 }}
                  animate={{
                    offsetDistance: [null, "0%", "100%", "100%", "100%"],
                    opacity: [0, 0, 1, 0, 0],
                  }}
                  transition={{
                    duration: fullCycleDuration,
                    times: [0, startTime, endTime, resetTime, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                  style={{
                    offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                  }}
                />
              )}
              {/* Static Dots */}
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
              
              {/* Pulsing Effect for Start Point */}
              <circle cx={startPoint.x} cy={startPoint.y} r="3" fill={lineColor} opacity="0.5">
                 <animate attributeName="r" from="3" to="12" dur="2s" begin="0s" repeatCount="indefinite" />
                 <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* HTML Overlay Layer for Labels - Better Mobile Responsiveness */}
      {showLabels && (
        <div className="absolute inset-0 pointer-events-none w-full h-full">
          {dots.map((dot, i) => {
             const startPoint = projectPoint(dot.start.lat, dot.start.lng);
             const endPoint = projectPoint(dot.end.lat, dot.end.lng);

             // Calculate percentages for positioning
             const startLeft = (startPoint.x / 800) * 100;
             const startTop = (startPoint.y / 400) * 100;
             
             const endLeft = (endPoint.x / 800) * 100;
             const endTop = (endPoint.y / 400) * 100;

             return (
               <React.Fragment key={`labels-${i}`}>
                 {/* Start Label */}
                 {dot.start.label && (
                   <div 
                     className="absolute transform -translate-x-1/2 -translate-y-full pb-2"
                     style={{ left: `${startLeft}%`, top: `${startTop}%` }}
                   >
                     <motion.div
                       initial={{ opacity: 0, y: 5 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5 * i + 0.3 }}
                       className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded text-[10px] md:text-xs font-semibold text-gray-800 shadow-sm whitespace-nowrap"
                     >
                       {dot.start.label}
                     </motion.div>
                   </div>
                 )}
                 {/* End Label */}
                 {dot.end.label && (
                   <div 
                     className="absolute transform -translate-x-1/2 -translate-y-full pb-2"
                     style={{ left: `${endLeft}%`, top: `${endTop}%` }}
                   >
                     <motion.div
                       initial={{ opacity: 0, y: 5 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5 * i + 0.5 }}
                       className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded text-[10px] md:text-xs font-semibold text-gray-800 shadow-sm whitespace-nowrap"
                     >
                       {dot.end.label}
                     </motion.div>
                   </div>
                 )}
               </React.Fragment>
             );
          })}
        </div>
      )}
    </div>
  );
}
