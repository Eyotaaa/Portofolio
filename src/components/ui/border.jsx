"use client";
import React from "react";
import { cn } from "../lib/utils2";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "relative p-[3px] rounded-2xl overflow-hidden w-fit group",
        containerClassName
      )}
      {...props}
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-[inherit] 
                   bg-[conic-gradient(from_0deg,#fde047,#f59e0b,#ea580c,#fde047)] 
                   animate-[spin_12s_linear_infinite] 
                   opacity-60 blur-lg
                   transition-all duration-500
                   group-hover:opacity-90 group-hover:animate-[spin_4s_linear_infinite]"
      />

      {/* Konten dengan background, biar glow jadi border */}
      <div className="relative z-10 rounded-[inherit] bg-white dark:bg-neutral-950 p-1">
        <div
          className={cn(
            "rounded-[inherit] overflow-hidden transition-transform duration-500 group-hover:scale-105",
            className
          )}
        >
          {children}
        </div>
      </div>
    </Tag>
  );
}
