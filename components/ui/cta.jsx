"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  animate,
  stagger,
} from "framer-motion";

import { BsStarFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";

export function SimpleCTAWithImages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-center w-full md:px-8">
      <div className="flex flex-col">
        <motion.h2 className="text-black dark:text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
          Get a free, <br />
          no obligation quote today.
        </motion.h2>
        <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
          Ready to restore the look of your home or business? Contact us now for
          a free, no-obligation quote and see how our professional pressure
          washing services can make a difference!
        </p>
        <FeaturedImages
          textClassName="lg:text-left text-center"
          className="lg:justify-start justify-start items-center"
          containerClassName="md:items-start"
          showStars
        />
      </div>
      {/* <button className="flex space-x-2 items-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
        <span>Book a call</span>
        <HiArrowRight className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
      </button> */}
      <Link href="/contact">
        <HoverBorderGradient>Contact Us</HoverBorderGradient>
      </Link>
    </div>
  );
}

export const FeaturedImages = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    animate(
      ".animation-container",
      {
        scale: [1.1, 1, 0.9, 1],
        opacity: [0, 1],
      },
      { duration: 0.4, delay: stagger(0.1) }
    );
  }, []);
  return (
    <div
      className={cn(
        "flex flex-col items-center mt-10 mb-10",
        containerClassName
      )}
    >
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center mb-2",
          className
        )}
      >
        <div className="flex flex-row items-center mb-4 sm:mb-0">
          {testimonials.map((testimonial, idx) => (
            <div
              className="-mr-4  relative group"
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,

                      whiteSpace: "nowrap",
                    }}
                    className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-neutral-900 z-50 shadow-xl px-4 py-2"
                  >
                    <div className="absolute inset-x-0 z-30 w-[20%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                    <div className="absolute inset-x-0 w-[70%] mx-auto z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-white relative z-30 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-neutral-300 text-xs px-1 py-0.5 rounded-sm bg-neutral-950">
                        {testimonial.designation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="animation-container">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-2xl overflow-hidden border-2  border-neutral-200  relative"
                >
                  <Link href={testimonial.href} target="_blank">
                    <Image
                      onMouseMove={handleMouseMove}
                      height={100}
                      width={100}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover object-top  h-14 w-14 "
                    />
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center ml-6">
          {[...Array(5)].map((_, index) => (
            <BsStarFill
              key={index}
              className={showStars ? "h-4 w-4 text-yellow-400 mx-1" : "hidden"}
            />
          ))}
        </div>
      </div>
      <p
        className={cn(
          "text-neutral-400 text-sm text-left  relative z-40",
          textClassName
        )}
      >
        Trusted by Homeowners and Businesses Alike
      </p>
    </div>
  );
};

const testimonials = [
  {
    name: "ELA",
    designation: "on Tiktok",
    image: "/assets/images/cta/tiktok.jpeg",
    href: "https://www.tiktok.com/@ela_pressure_washing",
  },
  {
    name: "ELA",
    designation: "on Youtube",
    image: "/assets/images/cta/youtube.png",
    href: "https://www.youtube.com/@elapressurewashing5332",
  },
  {
    name: "ELA",
    designation: "on Facebook",
    image: "/assets/images/cta/facebook.png",
    href: "https://www.facebook.com/profile.php?id=100083060296284",
  },
  {
    name: "ELA",
    designation: "on Instagram",
    image: "/assets/images/cta/instagram.png",
    href: "https://www.instagram.com/ela.pressurewashing/",
  },
  {
    name: "ELA",
    designation: "on Google",
    image: "/assets/images/cta/google.svg",
    href: "https://g.co/kgs/HVmAuCY",
  },
  {
    name: "ELA",
    designation: "on Yell",
    image: "/assets/images/cta/yell.png",
    href: "https://www.yell.com/biz/ela-pressure-washing-driveway-cleaning-and-sealing-wolverhampton-10441878/",
  },
];
