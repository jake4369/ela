"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";
import { AnimatedTooltip } from "./animated-tooltip";

const items = [
  {
    id: 0,
    name: "Youtube Channel",
    designation: "Visit Our",
    image: "/assets/images/hero/youtube.png",
    link: "https://www.youtube.com/channel/UCXUiMX2wjP0JDveKzFt9P5A",
  },
  {
    id: 1,
    name: "Tiktok Channel",
    designation: "Visit Our",
    image: "/assets/images/hero/tiktok.png",
    link: "https://www.tiktok.com/@ela_pressure_washing",
  },
  {
    id: 2,
    name: "Instagram Page",
    designation: "Visit Our",
    image: "/assets/images/hero/instagram.png",
    link: "https://www.instagram.com/ela.pressurewashing/",
  },
  {
    id: 3,
    name: "Facebook Page",
    designation: "Visit Our",
    image: "/assets/images/hero/facebook.svg",
    link: "https://www.yell.com/biz/ela-pressure-washing-driveway-cleaning-and-sealing-wolverhampton-10441878/",
  },
  {
    id: 4,
    name: "Yell Profile",
    designation: "Visit Our",
    image: "/assets/images/hero/yell.png",
    link: "https://www.yell.com/biz/ela-pressure-washing-driveway-cleaning-and-sealing-wolverhampton-10441878/",
  },
  {
    id: 5,
    name: "Google Business",
    designation: "Visit Our",
    image: "/assets/images/hero/google.jpg",
    link: "https://g.co/kgs/nthdDc2",
  },
];

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[1800px] md:h-[2000px] pt-40 mb-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-20 px-4 w-full  left-0 top-0">
      <h1 className="text-5xl md:text-7xl font-bold dark:text-white ">
        ELA Pressure Washing
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-12">
        At ELA Pressure Washing, we provide expert pressure washing and steam
        cleaning for both commercial and residential properties. Using advanced
        equipment and eco-friendly methods, we deliver outstanding results to
        keep your property looking its best.
      </p>

      <HoverBorderGradient containerClassName="mb-24">
        Contact Us
      </HoverBorderGradient>

      <div className="flex">
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className="group/product h-64 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </motion.div>
  );
};
