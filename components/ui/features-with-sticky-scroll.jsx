"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";

const primaryServices = [
  {
    title: "Driveway Cleaning",
    href: "/services/driveway-cleaning",
  },
  {
    title: "Patio Cleaning",
    href: "/services/patio-cleaning",
  },
  {
    title: "Roof Cleaning & Moss Removal",
    href: "/services/roof-cleaning",
  },
  {
    title: "Commercial Pressure Washing",
    href: "/services/commercial-pressure-washing",
  },
  {
    title: "Professional Steam Cleaning",
    href: "/services/steam-cleaning",
  },
  {
    title: "Heritage Brickwork Cleaning",
    href: "/services/heritage-brickwork-cleaning",
  },
];

const features = [
  {
    title: "Service Overview",
    description:
      "ELA Pressure Washing provides specialist exterior cleaning for homes, businesses and commercial sites across Wolverhampton and the West Midlands. From driveway and patio cleaning to roof moss removal and more sensitive exterior surfaces, we assess the property and select cleaning techniques suited to the materials and work involved.",
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
      "Our services include pressure washing, soft washing, high-temperature steam cleaning, roof scraping and moss removal, and specialist heritage brickwork care. We also offer commercial exterior cleaning, graffiti and chewing gum removal, patio repointing, surface sealing and appropriate chemical or biocide treatments.",
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
      "ELA has invested significantly in specialist van-mounted equipment, enabling high- and low-pressure steam cleaning without relying on an external water or electricity supply. Our experience includes work undertaken as a contractor for Wolverhampton City Council and exterior cleaning projects at retail parks nationwide, as well as residential work. With over 10 years of experience in exterior cleaning and project management, we use heritage-certified specialist equipment where appropriate and maintain risk assessments, method statements and COSHH documentation.",
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

      {/* Links to six dedicated service pages */}
      <div className="mx-auto mt-12 w-full max-w-5xl px-6">
        <h3 className="text-center text-xl font-bold text-white md:text-2xl">
          Explore Our Specialist Services
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-neutral-300 md:text-base">
          Find the cleaning service that best suits your property. Explore our
          dedicated service pages to learn more about the work we offer.
        </p>

        <nav aria-label="Explore individual cleaning services" className="mt-8">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="group flex min-h-[76px] h-full items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-4 text-white transition-colors duration-200 hover:border-sky-400 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  <span className="text-sm font-semibold leading-6 md:text-base">
                    {service.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl font-semibold text-sky-300 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-center text-sm text-neutral-300">
          Looking for another service?{" "}
          <Link
            href="/services"
            className="font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            View our complete range of services
          </Link>
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
