"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 350,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);

  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-[30rem] border-b-[2px]", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] bg-white"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div className="absolute inset-0 z-0 h-full w-full opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-4xl text-center text-[22px] md:text-2xl lg:text-3xl font-bold capitalize md:leading-9 2xl:leading-12 px-24 md:px-32 lg:px-36"
        >
          {children}
        </div>
      </motion.div>

      <div className="flex h-full w-full items-center justify-center px-24 md:px-32 lg:px-36">
        {revealText}
      </div>
    </motion.div>
  );
};
