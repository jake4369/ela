"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconMessageCircleQuestion } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { HiArrowRight } from "react-icons/hi2";

export function CTAWithDashedGridLines() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 mt-20 md:mt-40 justify-start relative z-20 max-w-7xl mx-auto bg-gradient-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950">
      <GridLineHorizontal className="top-0" offset="200px" />
      <GridLineHorizontal className="bottom-0 top-auto" offset="200px" />
      <GridLineVertical className="left-0" offset="80px" />
      <GridLineVertical className="left-auto right-0" offset="80px" />
      <div className="md:col-span-2 p-8 md:p-14">
        <h2 className="text-left text-neutral-500 dark:text-neutral-200 text-xl md:text-3xl tracking-tight font-medium">
          Refresh your outdoor spaces with{" "}
          <span className="font-bold text-black dark:text-white">
            professional cleaning
          </span>
        </h2>
        <p className="text-left text-neutral-500 mt-4 max-w-lg dark:text-neutral-200 text-xl md:text-3xl tracking-tight font-medium mb-12">
          Experience top-quality <span className="text-sky-700">service</span>{" "}
          for spotless <span className="text-indigo-700">results</span> that
          last.
        </p>

        <div className="flex items-start sm:items-center flex-col sm:flex-row sm:gap-4">
          <Link href="/contact">
            <HoverBorderGradient className="py-4 px-8">
              Contact Us
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
      <div className="border-t md:border-t-0 md:border-l border-dashed p-8 md:p-14">
        <p className="text-base text-neutral-700 dark:text-neutral-200">
          Transform your outdoor spaces with our expert cleaning services.
          Whether you need a deep clean or ongoing maintenance, we’ve got the
          perfect solution for you. Contact us now for a free consultation and
          see how we can bring back the beauty of your property!
        </p>
      </div>
    </section>
  );
}

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",

        //-100px if you want to keep the line inside
        "--offset": offset || "200px",

        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",

        //-100px if you want to keep the line inside
        "--offset": offset || "150px",

        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
