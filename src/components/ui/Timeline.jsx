"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 150%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 mb-8"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 pb-5">
        <h2 className="text-lg md:text-4xl mb-2 font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
          Changelog From My Academic Journey
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          I&apos;ve been study on Telkom University for the past 3.5 years.
          Here&apos;s a timeline of my journey.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-24 md:gap-10"
          >
            {/* Titik + Judul kiri */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="absolute left-5 md:left-3 h-6 w-6 md:h-10 md:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Konten */}
            <div className="relative pl-12 pr-4 md:pl-4 w-full">
              {/* Judul di mobile */}
              <h3 className="md:hidden block text-lg font-bold text-neutral-500 dark:text-neutral-500 mb-2">
                {item.title}
              </h3>
              <div className="text-sm md:text-base">{item.content}</div>
            </div>
          </div>
        ))}

        {/* Garis timeline */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-6 md:left-8 top-0 overflow-hidden w-[2px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
