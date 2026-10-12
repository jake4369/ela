"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";

const features = [
  {
    title: "Service Overview",
    description:
      "Our expert pressure washing services are tailored to restore and protect your outdoor surfaces, enhancing both their appearance and durability. Using advanced cleaning techniques, we ensure a thorough, safe clean for everything from driveways to delicate brickwork, leaving your property looking pristine and well-maintained.",
    content: (
      <Image
        src="/assets/images/services/roofpro.svg"
        alt="A well-maintained house exterior after pressure washing"
        width={500}
        height={500}
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="rounded-lg w-full h-auto"
        loading="lazy"
      />
    ),
  },
  {
    title: "Core Services",
    description:
      "Offering high-pressure washing for tough surfaces, soft washing for delicate areas, steam cleaning for deep sanitation, and specialized care for heritage brickwork. Our services also include graffiti removal, chewing gum removal, surface sealing for protection, and roof scraping with biocide treatments to ensure long-lasting cleanliness and preservation.",
    content: (
      <figure className="w-full">
        <video
          controls
          preload="none"
          playsInline
          className="rounded-lg w-full h-auto"
          aria-label="Service overview video demonstrating our cleaning techniques"
        >
          <source src="/assets/images/services/ela.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <figcaption className="text-center md:text-left text-neutral-200 mt-2">
          Click to play video
        </figcaption>
      </figure>
    ),
  },
  {
    title: "Specialized Equipment and Expertise",
    description:
      "Our fleet is equipped with multiple van-mounted systems, allowing us to operate high- or low-pressure steam without the need for an external water supply or electricity. We use only the highest-quality chemicals available, ensuring optimal results on the first pass. Our specialized heritage-certified machines enable us to safely clean listed and historic buildings. With over 10 years of experience in exterior cleaning and project management, we own all our equipment and maintain up-to-date risk assessments, method statements, and COSHH documents, ensuring compliance and safety at every job.",
    content: (
      <Image
        src="/assets/images/services/heritage.svg"
        alt="Example of ELA Pressure Washing exterior cleaning work"
        width={500}
        height={500}
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="rounded-lg w-full h-auto"
        loading="lazy"
      />
    ),
  },
  {
    title: "Our Complete Service Solutions",
    description:
      "Explore the complete range of our professional services by clicking the button below.",
    content: (
      <div className="relative">
        <div className="-rotate-[10deg] mb-6">
          <Image
            src="/assets/images/services/house.jpg"
            alt="A house showcasing the effects of our cleaning services"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="rounded-lg w-full h-auto"
            loading="lazy"
            quality={70}
          />
        </div>

        <div className="absolute inset-0 rotate-[10deg]">
          <Image
            src="/assets/images/services/civic.jpg"
            alt="Another view of our exterior cleaning services"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="rounded-lg w-full h-auto"
            loading="lazy"
            quality={70}
          />
        </div>
      </div>
    ),
  },
];

export function FeaturesWithStickyScroll() {
  return (
    <section
      className="w-full relative h-full max-w-7xl mx-auto bg-[#030816]"
      id="servicesSection"
      aria-labelledby="services-header"
    >
      <div className="px-6 flex flex-col items-center text-center">
        <h2
          id="services-header"
          className="text-center text-4xl font-bold tracking-tight text-white md:text-left md:text-6xl"
        >
          Our Services
        </h2>

        <p className="text-neutral-200 text-sm md:text-base max-w-md mx-auto mt-4">
          Explore our range of specialized cleaning and maintenance services
          designed to keep your outdoor spaces pristine and well-protected.
        </p>
      </div>

      <StickyScroll content={features} />
    </section>
  );
}

export const StickyScroll = ({ content }) => {
  return (
    <div className="py-4 md:py-20">
      <div className="hidden lg:flex h-full flex-col max-w-7xl mx-auto justify-between relative p-10">
        {content.map((item, index) => (
          <ScrollContent
            key={`desktop-${item.title}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>

      <div className="flex lg:hidden flex-col max-w-7xl mx-auto justify-between relative p-10">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={`mobile-${item.title}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export const ScrollContent = ({ item, index }) => {
  const ref = useRef(null);

  const headingId = `services-desktop-${index}-title`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);

  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0],
  );

  return (
    <motion.article
      ref={ref}
      className="my-40 relative grid grid-cols-2 gap-8"
      aria-labelledby={headingId}
    >
      <div className="w-full">
        <motion.div
          style={{
            y: translate,
            opacity: index === 0 ? opacityContent : 1,
          }}
        >
          <IconInfoSquareRounded
            className="h-8 w-8 text-neutral-200"
            aria-hidden="true"
          />

          <motion.h3
            id={headingId}
            className="max-w-md mt-2 font-bold text-2xl lg:text-4xl inline-block text-left text-white"
          >
            {item.title}
          </motion.h3>

          <motion.p
            className={`text-lg text-neutral-200 font-normal max-w-sm mt-2 ${
              item.title === "Our Complete Service Solutions" ? "mb-16" : ""
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
        style={{
          y: translateContent,
          opacity: opacity,
        }}
        className="h-full w-full rounded-md self-start"
      >
        {item.content}
      </motion.div>
    </motion.article>
  );
};

export const ScrollContentMobile = ({ item, index }) => {
  const headingId = `services-mobile-${index}-title`;

  return (
    <motion.article
      className="my-10 relative flex flex-col md:flex-row md:gap-20"
      aria-labelledby={headingId}
    >
      <div className="w-full rounded-md self-start mb-8">{item.content}</div>

      <div className="w-full">
        <div className="mb-6">
          <IconInfoSquareRounded
            className="h-8 w-8 text-neutral-200"
            aria-hidden="true"
          />

          <h3
            id={headingId}
            className="mt-2 font-bold text-2xl lg:text-4xl inline-block text-left text-white"
          >
            {item.title}
          </h3>

          <p
            className={`text-sm md:text-base text-neutral-200 font-bold max-w-sm mt-2 ${
              item.title === "Our Complete Service Solutions" ? "mb-10" : ""
            }`}
          >
            {item.description}
          </p>

          {item.title === "Our Complete Service Solutions" && (
            <Link href="/services">
              <HoverBorderGradient className="py-4 px-8">
                View Services
              </HoverBorderGradient>
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
};
