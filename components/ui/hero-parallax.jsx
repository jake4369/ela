"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./hover-border-gradient";

// export const HeroParallax = ({ products }) => {
//   const firstRow = products.slice(0, 5);
//   const secondRow = products.slice(5, 10);
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

//   const translateX = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, 1000]),
//     springConfig
//   );
//   const translateXReverse = useSpring(
//     useTransform(scrollYProgress, [0, 1], [0, -1000]),
//     springConfig
//   );
//   const rotateX = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [15, 0]),
//     springConfig
//   );
//   const opacity = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
//     springConfig
//   );
//   const rotateZ = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [20, 0]),
//     springConfig
//   );
//   const translateY = useSpring(
//     useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
//     springConfig
//   );

//   return (
//     <section
//       ref={ref}
//       aria-labelledby="hero-heading"
//       className="h-[1800px] md:h-[2000px] pt-40 overflow-hidden relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
//     >
//       <Header />
//       <motion.div
//         style={{
//           rotateX,
//           rotateZ,
//           translateY,
//           opacity,
//         }}
//         className="relative"
//       >
//         <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
//           {firstRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateX}
//               key={product.id}
//             />
//           ))}
//         </motion.div>
//         <motion.div className="flex flex-row space-x-20">
//           {secondRow.map((product) => (
//             <ProductCard
//               product={product}
//               translate={translateXReverse}
//               key={product.id}
//             />
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export const Header = () => {
//   return (
//     <header
//       className="max-w-7xl mx-auto pt-20 px-4 w-full"
//       aria-label="Introduction"
//     >
//       <h1
//         id="hero-heading 0"
//         className="text-5xl md:text-7xl font-bold dark:text-white"
//       >
//         ELA Pressure Washing
//       </h1>
//       <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-12">
//         At ELA Pressure Washing, we provide expert pressure washing and steam
//         cleaning for both commercial and residential properties. Using advanced
//         equipment and eco-friendly methods, we deliver outstanding results to
//         keep your property looking its best.
//       </p>
//       <Link href="/contact">
//         <HoverBorderGradient className="py-4 px-8 text-xl">
//           Contact Us
//         </HoverBorderGradient>
//       </Link>
//     </header>
//   );
// };

// export const ProductCard = ({ product, translate }) => {
//   return (
//     <motion.article
//       aria-labelledby={`product-${product.id}`}
//       style={{
//         x: translate,
//       }}
//       key={product.id}
//       className="group/product h-64 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0"
//     >
//       <Image
//         src={product.thumbnail}
//         height={600}
//         width={600}
//         className="object-cover object-left-top absolute h-full w-full inset-0"
//         alt={`Image of ${product.title}`}
//         priority={true}
//       />
//       <h2 id={`product-${product.id}`} className="sr-only">
//         {product.title}
//       </h2>
//     </motion.article>
//   );
// };

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
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
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="h-[1800px] md:h-[2000px] pt-40 overflow-hidden relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] z-0"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-0" // Ensure the product container is below the Header
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <header
      className="max-w-7xl mx-auto pt-20 px-4 w-full z-50 relative" // High z-index on the Header
      aria-label="Introduction"
    >
      <h1
        id="hero-heading"
        className="text-5xl md:text-7xl font-bold dark:text-white"
      >
        ELA Pressure Washing
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-12">
        At ELA Pressure Washing, we provide expert pressure washing and steam
        cleaning for both commercial and residential properties. Using advanced
        equipment and eco-friendly methods, we deliver outstanding results to
        keep your property looking its best.
      </p>
      <Link href="/contact">
        <HoverBorderGradient className="py-4 px-8 text-xl">
          Contact Us
        </HoverBorderGradient>
      </Link>
    </header>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.article
      aria-labelledby={`product-${product.id}`}
      style={{
        x: translate,
      }}
      key={product.id}
      className="group/product h-64 w-[20rem] md:h-96 md:w-[30rem] relative flex-shrink-0 z-0" // Ensure this is under Header
    >
      <Image
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={`Image of ${product.title}`}
        priority={true}
      />
      <h2 id={`product-${product.id}`} className="sr-only">
        {product.title}
      </h2>
    </motion.article>
  );
};
