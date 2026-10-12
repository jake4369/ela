// "use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Compare } from "./compare";

// export function FeaturesSectionDemo() {
//   const features = [
//     {
//       title: "Who We Are",
//       description:
//         "At ELA Pressure Washing, we are experts in pressure washing and steam cleaning for both residential and commercial properties. Our team is dedicated to delivering exceptional cleaning solutions that help restore and maintain the beauty of your space, no matter the size or scope.",
//       skeleton: <SkeletonOne />,
//       className:
//         "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
//     },
//     {
//       title: "Our Expertise",
//       description:
//         "We specialize in providing comprehensive cleaning services for homes, businesses, and industrial facilities. Whether it’s removing grime from home exteriors or deep-cleaning large commercial spaces, our experienced professionals use advanced techniques to tackle even the toughest jobs.",
//       skeleton: <SkeletonTwo />,
//       className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
//     },
//     {
//       title: "Our Commitment to You",
//       description:
//         "Customer satisfaction is at the heart of everything we do. We are committed to delivering reliable, professional, and timely service tailored to your specific needs. With ELA Pressure Washing, you can trust that your property will be revitalized and kept looking its best for years to come.",
//       skeleton: <SkeletonThree />,
//       className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
//     },
//     {
//       title: "Eco-Friendly, Advanced Solutions",
//       description:
//         "Using the latest in pressure washing technology and eco-friendly cleaning methods, we ensure your property is thoroughly cleaned without causing harm to the environment. From dirt and mold to stains and mildew, we restore your surfaces with care and precision while prioritizing sustainability.",
//       skeleton: <SkeletonFour />,
//       className: "col-span-1 lg:col-span-3 border-b lg:border-none",
//     },
//   ];

//   return (
//     <section
//       className="relative z-20 pt-10 lg:pt-40 max-w-7xl mx-auto mb-32"
//       id="about"
//       aria-labelledby="about-title"
//     >
//       <div className="px-8">
//         <h2
//           id="about-title"
//           className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-6xl"
//           role="heading"
//           aria-level="2"
//         >
//           About Our Company
//         </h2>
//       </div>
//       <div className="relative">
//         <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
//           {features.map((feature) => (
//             <FeatureCard key={feature.title} className={feature.className}>
//               <FeatureTitle>{feature.title}</FeatureTitle>
//               <FeatureDescription>{feature.description}</FeatureDescription>
//               <div className="h-full w-full">{feature.skeleton}</div>
//             </FeatureCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const FeatureCard = ({ children, className }) => {
//   return (
//     <article
//       className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}
//       role="article"
//     >
//       {children}
//     </article>
//   );
// };

// const FeatureTitle = ({ children }) => {
//   return (
//     <h3
//       className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-2xl md:text-4xl md:leading-snug"
//       role="heading"
//       aria-level="3"
//     >
//       {children}
//     </h3>
//   );
// };

// const FeatureDescription = ({ children }) => {
//   return (
//     <p
//       className={cn(
//         "text-l md:text-base  max-w-4xl text-left mx-auto",
//         "text-neutral-500 text-center font-normal dark:text-neutral-300",
//         "text-left max-w-sm mx-0 md:text-l my-2 mb-8"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const SkeletonOne = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full px-5 md:p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2">
//           <Image
//             src="/assets/images/about/header.jpg"
//             alt="A beautiful header showcasing ELA Pressure Washing services"
//             width={800}
//             height={800}
//             className="w-full md:max-h-[470px] aspect-square object-cover object-left-top rounded-sm"
//             loading="lazy" // Added lazy loading
//           />
//         </div>
//       </div>
//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonThree = () => {
//   return (
//     <div
//       className="w-full mx-auto bg-transparent dark:bg-transparent group h-full"
//       role="region"
//       aria-labelledby="compare-title"
//     >
//       <h3 id="compare-title" className="sr-only">
//         Before and After Comparison
//       </h3>
//       <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
//         <Compare
//           firstImage="/assets/images/about/before.svg"
//           secondImage="/assets/images/about/after.svg"
//           className="w-full"
//           aria-hidden="true"
//         />
//       </div>
//     </div>
//   );
// };

// export const SkeletonTwo = () => {
//   const images = [
//     "/assets/images/about/drive.jpg",
//     "/assets/images/about/commercial.jpg",
//     "/assets/images/about/roof.jpg",
//     "/assets/images/about/crane.jpeg",
//     "/assets/images/about/drive2.jpg",
//   ];

//   const imageVariants = {
//     whileHover: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//     whileTap: {
//       scale: 1.1,
//       rotate: 0,
//       zIndex: 100,
//     },
//   };

//   return (
//     <div
//       className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden"
//       role="region"
//       aria-hidden="true" // Hides this section from screen readers
//     >
//       <div className="flex flex-row -ml-20">
//         {images.map((image, idx) => (
//           <motion.div
//             variants={imageVariants}
//             key={`images-first-${idx}`}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt={`Image showcasing ELA Pressure Washing service - ${idx + 1}`}
//               width={500}
//               height={500}
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//               loading="lazy"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         {images.map((image, idx) => (
//           <motion.div
//             key={`images-second-${idx}`}
//             style={{
//               rotate: Math.random() * 20 - 10,
//             }}
//             variants={imageVariants}
//             whileHover="whileHover"
//             whileTap="whileTap"
//             className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//           >
//             <Image
//               src={image}
//               alt={`Image showcasing ELA Pressure Washing service - ${idx + 1}`}
//               width={500}
//               height={500}
//               className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//               loading="lazy"
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
//       <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonFour = () => {
//   return (
//     <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
//       <Globe
//         className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72"
//         aria-hidden="true"
//       />
//     </div>
//   );
// };

// export const Globe = ({ className }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let phi = 0;

//     if (!canvasRef.current) return;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.01;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <figure className={className} role="img" aria-hidden="true">
//       <canvas
//         ref={canvasRef}
//         style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//         aria-hidden="true" // Hides the canvas from screen readers since it is a decorative element
//       />
//       <figcaption id="globe-description" className="sr-only">
//         A 3D animated globe showcasing different locations related to ELA
//         Pressure Washing services.
//       </figcaption>
//     </figure>
//   );
// };

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { Compare } from "./compare";

// ==========================================
// ABOUT SECTION
// ==========================================

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Who We Are",
      description:
        "At ELA Pressure Washing, we are experts in pressure washing and steam cleaning for both residential and commercial properties. Our team is dedicated to delivering exceptional cleaning solutions that help restore and maintain the beauty of your space, no matter the size or scope.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Our Expertise",
      description:
        "We specialize in providing comprehensive cleaning services for homes, businesses, and industrial facilities. Whether it’s removing grime from home exteriors or deep-cleaning large commercial spaces, our experienced professionals use advanced techniques to tackle even the toughest jobs.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Our Commitment to You",
      description:
        "Customer satisfaction is at the heart of everything we do. We are committed to delivering reliable, professional, and timely service tailored to your specific needs. With ELA Pressure Washing, you can trust that your property will be revitalized and kept looking its best for years to come.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Eco-Friendly, Advanced Solutions",
      description:
        "Using the latest in pressure washing technology and eco-friendly cleaning methods, we ensure your property is thoroughly cleaned without causing harm to the environment. From dirt and mold to stains and mildew, we restore your surfaces with care and precision while prioritizing sustainability.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <section
      className="relative z-20 pt-10 lg:pt-40 max-w-7xl mx-auto mb-32"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="px-8">
        <h2
          id="about-title"
          className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-6xl"
        >
          About Our Company
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>

              <FeatureDescription>{feature.description}</FeatureDescription>

              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FEATURE CARD COMPONENTS
// ==========================================

const FeatureCard = ({ children, className }) => {
  return (
    <article className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
      {children}
    </article>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <h3 className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-2xl md:text-4xl md:leading-snug">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-l md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 font-normal dark:text-neutral-300",
        "max-w-sm mx-0 md:text-l my-2 mb-8",
      )}
    >
      {children}
    </p>
  );
};

// ==========================================
// SKELETON ONE - COMPANY IMAGE
// ==========================================

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full px-5 md:p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <Image
            src="/assets/images/about/header.jpg"
            alt="ELA Pressure Washing exterior cleaning services"
            width={800}
            height={800}
            className="w-full md:max-h-[470px] aspect-square object-cover object-left-top rounded-sm"
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />

      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

// ==========================================
// SKELETON TWO - ANIMATED IMAGE CARDS
// ==========================================

export const SkeletonTwo = () => {
  const images = [
    "/assets/images/about/drive.jpg",
    "/assets/images/about/commercial.jpg",
    "/assets/images/about/roof.jpg",
    "/assets/images/about/crane.jpeg",
    "/assets/images/about/drive2.jpg",
  ];

  // Fixed rotations prevent hydration mismatches.
  const firstRowRotations = [-8, 6, -4, 9, -6];
  const secondRowRotations = [6, -9, 8, -3, 5];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div
      className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden"
      role="region"
      aria-hidden="true"
    >
      {/* First row */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={`images-first-${idx}`}
            variants={imageVariants}
            style={{
              rotate: firstRowRotations[idx],
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`ELA Pressure Washing service example ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-second-${idx}`}
            variants={imageVariants}
            style={{
              rotate: secondRowRotations[idx],
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt={`ELA Pressure Washing service example ${idx + 1}`}
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />

      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

// ==========================================
// SKELETON THREE - BEFORE / AFTER COMPARISON
// ==========================================

export const SkeletonThree = () => {
  return (
    <div
      className="w-full mx-auto bg-transparent dark:bg-transparent group h-full"
      role="region"
      aria-labelledby="compare-title"
    >
      <h3 id="compare-title" className="sr-only">
        Before and After Comparison
      </h3>

      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <Compare
          firstImage="/assets/images/about/before.svg"
          secondImage="/assets/images/about/after.svg"
          className="w-full"
        />
      </div>
    </div>
  );
};

// ==========================================
// SKELETON FOUR - INTERACTIVE GLOBE
// ==========================================

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

// ==========================================
// GLOBE - WEBGL SAFE INITIALISATION
// ==========================================

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  const [globeUnavailable, setGlobeUnavailable] = useState(false);

  useEffect(() => {
    if (globeUnavailable) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    let globe = null;
    let phi = 0;
    let disposed = false;

    // Handle WebGL context loss without crashing the page.
    const handleContextLost = (event) => {
      event.preventDefault();

      if (!disposed) {
        setGlobeUnavailable(true);
      }
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);

    // Initialise the globe inside a try/catch.
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,

        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],

        markers: [
          {
            location: [37.7595, -122.4367],
            size: 0.03,
          },
          {
            location: [40.7128, -74.006],
            size: 0.1,
          },
        ],

        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    } catch (error) {
      console.warn("ELA Globe: WebGL initialisation failed.", error);

      if (!disposed) {
        setGlobeUnavailable(true);
      }
    }

    // Cleanup whenever the component unmounts
    // or the fallback becomes active.
    return () => {
      disposed = true;

      canvas.removeEventListener("webglcontextlost", handleContextLost);

      if (globe) {
        try {
          globe.destroy();
        } catch (error) {
          console.warn("ELA Globe: Cleanup failed.", error);
        }
      }
    };
  }, [globeUnavailable]);

  return (
    <figure className={className} aria-hidden="true">
      {globeUnavailable ? (
        // Decorative fallback if WebGL is unavailable.
        <div
          className="h-[600px] w-[600px] max-w-full rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(130,130,130,0.35), rgba(20,20,20,0.2) 60%, transparent 75%)",
          }}
        />
      ) : (
        <canvas
          ref={canvasRef}
          style={{
            width: 600,
            height: 600,
            maxWidth: "100%",
            aspectRatio: 1,
          }}
          aria-hidden="true"
        />
      )}
    </figure>
  );
};
