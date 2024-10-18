"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";

const features = [
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Service Overview",
    description:
      "Our expert pressure washing services are tailored to restore and protect your outdoor surfaces, enhancing both their appearance and durability. Using advanced cleaning techniques, we ensure a thorough, safe clean for everything from driveways to delicate brickwork, leaving your property looking pristine and well-maintained.",
    content: (
      <div>
        <Image
          src="/assets/images/services/house.jpg"
          alt="car"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Core Services",
    description:
      "Offering high-pressure washing for tough surfaces, soft washing for delicate areas, steam cleaning for deep sanitation, and specialized care for heritage brickwork. Our services also include graffiti removal, chewing gum removal, surface sealing for protection, and roof scraping with biocide treatments to ensure long-lasting cleanliness and preservation.",
    content: (
      <video width="100%" height="100%" controls className="rounded-lg">
        <source src="/assets/images/services/pool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    icon: <IconRocket className="h-8 w-8 text-neutral-200" />,
    title: "Our Complete Service Solutions",
    description:
      "Explore the complete range of our professional services by clicking the button below.",
    content: (
      <div className="relative">
        <div className="-rotate-[10deg]">
          <Image
            src="/assets/images/services/house.jpg"
            alt="car"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
        <div className="absolute inset-0 transform rotate-[10deg]">
          <Image
            src="/assets/images/services/civic.jpg"
            alt="car"
            height="500"
            width="500"
            className="rounded-lg"
          />
        </div>
      </div>
    ),
  },
];

export function FeaturesWithStickyScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#1f2937", "#262626", "#1e293b"];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = features.map(
      (_, index) => index / features.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="w-full relative h-full pt-20 md:pt-40 max-w-7xl mx-auto"
      id="servicesSection"
    >
      <div className="px-6 flex flex-col items-center text-center">
        <h2 className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-left md:text-6xl">
          Our Services
        </h2>
        <p className="text-white text-sm md:text-base max-w-md mx-auto mt-4">
          Explore our range of specialized cleaning and maintenance services
          designed to keep your outdoor spaces pristine and well-protected.
        </p>
      </div>
      <StickyScroll content={features} />
    </motion.div>
  );
}

export const StickyScroll = ({ content }) => {
  return (
    <div className="py-4 md:py-20">
      <motion.div className="hidden lg:flex h-full  flex-col max-w-7xl mx-auto justify-between relative   p-10 ">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="flex lg:hidden  flex-col max-w-7xl mx-auto justify-between relative  p-10 ">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="my-40  relative grid grid-cols-2 gap-8"
    >
      <div className="w-full ">
        <motion.div
          style={{
            y: translate,
            opacity: index === 0 ? opacityContent : 1,
          }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="max-w-md mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
            {item.title}
          </motion.h2>

          <motion.p
            className={`text-lg text-neutral-500 font-regular max-w-sm mt-2 ${
              item.title === "Our Complete Service Solutions" && "mb-16"
            }`}
          >
            {item.description}
          </motion.p>

          {item.title === "Our Complete Service Solutions" && (
            <Link href="/services">
              <HoverBorderGradient className="py-4 px-8">
                View Services
              </HoverBorderGradient>
            </Link>
          )}
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{
          y: translateContent,
          opacity: opacity,
        }}
        className="h-full w-full rounded-md  self-start"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({ item, index }) => {
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="my-10  relative flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="w-full rounded-md  self-start mb-8"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className=" mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
            {item.title}
          </motion.h2>

          <motion.p
            className={`text-sm md:text-base text-neutral-500 font-bold max-w-sm mt-2 ${
              item.title === "Our Complete Service Solutions" && "mb-10"
            }`}
          >
            {item.description}
          </motion.p>
          {item.title === "Our Complete Service Solutions" && (
            <Link href="/services">
              <HoverBorderGradient className="py-4 px-8">
                View Services
              </HoverBorderGradient>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
