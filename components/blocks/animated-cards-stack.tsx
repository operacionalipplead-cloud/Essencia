import React, { createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { Star } from "lucide-react";

const ScrollContext = createContext<MotionValue<number> | null>(null);

export const ContainerScroll = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollContext.Provider value={scrollYProgress}>
      <div ref={containerRef} className={cn("relative", className)}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export const CardsContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {children}
    </div>
  );
};

export const CardTransformed = ({
  children,
  className,
  index,
  arrayLength,
  variant = "light",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  index: number;
  arrayLength: number;
  variant?: "light" | "dark";
  [key: string]: any;
}) => {
  const scrollYProgress = useContext(ScrollContext);
  const defaultMotionValue = useMotionValue(0);
  const safeProgress = scrollYProgress || defaultMotionValue;
  
  // Logic: 
  // We have N cards. 
  // Card 0 is the base.
  // Card 1..N-1 animate in.
  const step = 1 / Math.max(arrayLength - 1, 1); 
  
  const start = Math.max(0, (index - 1) * step);
  const end = Math.min(1, index * step);

  // Y Animation: Enters from bottom.
  // Using pixels is often more stable than vh in complex sticky contexts.
  // 1000px should be enough to be off-screen.
  const y = useTransform(
    safeProgress,
    [start, end],
    [800, 0] 
  );

  // Opacity: Fade in quickly.
  const opacity = useTransform(
    safeProgress,
    [start, start + 0.05], 
    [0, 1]
  );

  // Scale: As the NEXT card comes in, THIS card scales down.
  const nextStart = end;
  const nextEnd = Math.min(1, end + step);
  const scale = useTransform(
    safeProgress,
    [nextStart, nextEnd],
    [1, 0.9]
  );

  // Rotation: Random slight rotation for organic feel
  // Static for index 0 to anchor the stack.
  const randomRotate = (index % 2 === 0 ? 1 : -1) * 3; 
  const rotate = useTransform(
    safeProgress,
    [start, end],
    [randomRotate * 2, randomRotate]
  );

  const isBaseCard = index === 0;

  return (
    <motion.div
      style={{
        y: isBaseCard ? 0 : y,
        scale: scale,
        opacity: isBaseCard ? 1 : opacity,
        rotate: isBaseCard ? 0 : rotate,
        zIndex: index,
        transformOrigin: "center top",
      }}
      className={cn(
        "absolute top-0 left-0 right-0 mx-auto w-full h-full rounded-3xl p-8 shadow-2xl border flex flex-col justify-between transition-colors duration-300 backdrop-blur-md will-change-transform",
        variant === "dark" 
          ? "bg-sage-800 border-sage-700 text-sage-50" 
          : "bg-white border-gray-200 text-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const ReviewStars = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <div className={cn("flex space-x-1", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-5 h-5",
            i < Math.floor(rating) ? "fill-current" : "text-gray-300 dark:text-gray-600 opacity-30"
          )}
        />
      ))}
    </div>
  );
};