"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "drag",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(
    Math.max(0, Math.min(100, initialSliderPercentage)),
  );

  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay || autoplayDuration <= 0) return;

    stopAutoplay();

    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;

      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;

      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);

      autoplayRef.current = setTimeout(animate, 16);
    };

    animate();
  }, [autoplay, autoplayDuration, stopAutoplay]);

  useEffect(() => {
    startAutoplay();

    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const mouseEnterHandler = () => {
    stopAutoplay();
  };

  const mouseLeaveHandler = () => {
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }

    if (slideMode === "drag") {
      setIsDragging(false);
    }

    startAutoplay();
  };

  const handleStart = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;

      if (slideMode !== "hover" && !(slideMode === "drag" && isDragging)) {
        return;
      }

      const rect = sliderRef.current.getBoundingClientRect();

      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;

      setSliderXPercent(Math.max(0, Math.min(100, percentage)));
    },
    [slideMode, isDragging],
  );

  const handleMouseDown = useCallback(() => {
    stopAutoplay();
    handleStart();
  }, [handleStart, stopAutoplay]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleMouseMove = useCallback(
    (event) => {
      handleMove(event.clientX);
    },
    [handleMove],
  );

  const handleTouchStart = useCallback(
    (event) => {
      if (!autoplay && event.touches.length > 0) {
        handleStart();
      }
    },
    [handleStart, autoplay],
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (event) => {
      if (!autoplay && event.touches.length > 0) {
        handleMove(event.touches[0].clientX);
      }
    },
    [handleMove, autoplay],
  );

  const handleKeyDown = useCallback(
    (event) => {
      let nextValue = sliderXPercent;

      const step = event.shiftKey ? 10 : 5;

      switch (event.key) {
        case "ArrowLeft":
          nextValue -= step;
          break;

        case "ArrowRight":
          nextValue += step;
          break;

        case "Home":
          nextValue = 0;
          break;

        case "End":
          nextValue = 100;
          break;

        default:
          return;
      }

      event.preventDefault();

      stopAutoplay();

      setSliderXPercent(Math.max(0, Math.min(100, nextValue)));
    },
    [sliderXPercent, stopAutoplay],
  );

  return (
    <div
      ref={sliderRef}
      role="slider"
      tabIndex={0}
      aria-label="Before and after cleaning comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(sliderXPercent)}
      aria-orientation="horizontal"
      className={cn(
        "w-[400px] h-[400px] overflow-hidden relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400",
        className,
      )}
      style={{
        position: "relative",
        cursor:
          slideMode === "drag"
            ? isDragging
              ? "grabbing"
              : "grab"
            : "col-resize",
        touchAction: "pan-y",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onKeyDown={handleKeyDown}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
          style={{
            left: `${sliderXPercent}%`,
            top: 0,
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
          aria-hidden="true"
        >
          <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50 pointer-events-none" />

          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100 pointer-events-none" />

          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)] pointer-events-none">
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40] pointer-events-none">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                src={firstImage}
                alt="Before exterior cleaning"
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full object-cover object-center select-none",
                  firstImageClassName,
                )}
                draggable={false}
                loading="lazy"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            src={secondImage}
            alt="After exterior cleaning"
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full object-cover object-center select-none",
              secondImageClassname,
            )}
            draggable={false}
            loading="lazy"
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);
