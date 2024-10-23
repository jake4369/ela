"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

export function NavbarWithChildren() {
  return <Navbar />;
}

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/#about",
    },
    {
      name: "Services",
      children: [
        {
          name: "Service Overview",
          link: "/#servicesSection",
        },
        {
          name: "All Services",
          link: "/services",
        },
      ],
    },
    {
      name: "Our Work",
      children: [
        {
          name: "Work Overview",
          link: "/#work",
        },
        {
          name: "Gallery",
          link: "/gallery",
        },
      ],
    },
    {
      name: "Testimonials",
      link: "/#testimonials",
    },
    {
      name: "FAQs",
      link: "/#faqs",
    },
  ];

  return (
    <div className="w-full hover fixed z-50 bg-slate-950">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({ navItems }) => {
  const [active, setActive] = useState(null);
  return (
    <motion.div
      className={cn(
        "hidden lg:flex flex-row self-start bg-white dark:bg-slate-950 items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        "sticky top-40 inset-x-0"
      )}
    >
      {/* <Logo /> */}
      <Link href="/">
        <span>ELA Pressure Washing</span>
      </Link>
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            href="/"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Us"
            href="/#about"
          />
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <HoveredLink href="/#servicesSection">
                Service Overview
              </HoveredLink>
              <HoveredLink href="/services">All Services</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Our Work">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/#work">Work Overview</HoveredLink>
              <HoveredLink href="/gallery">Gallery</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Testimonials"
            href="/#testimonials"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="FAQs"
            href="/#faqs"
          />
        </Menu>
      </div>

      <Link href="/contact" aria-label="Click button to go to contact page">
        <HoverBorderGradient>Contact Us</HoverBorderGradient>
      </Link>
    </motion.div>
  );
};

const MobileNav = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? "4px" : "2rem",
        }}
        key={String(open)}
        className="flex relative flex-col lg:hidden w-full justify-between items-center bg-white dark:bg-slate-950  max-w-[calc(100vw-2rem)] mx-auto px-4 py-2"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link href="/">
            <span>ELA Pressure Washing</span>
          </Link>
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-slate-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8"
            >
              {navItems.map((navItem, idx) => (
                <div key={`navItem-${idx}`} className="w-full">
                  {navItem.children ? (
                    <MobileChildNavItems
                      navItem={navItem}
                      closeMenu={closeMenu}
                    />
                  ) : (
                    <Link
                      href={navItem.link}
                      className="relative text-neutral-600 dark:text-neutral-300"
                      onClick={() => closeMenu()}
                    >
                      <motion.span className="block">
                        {navItem.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="w-full flex justify-center"
                onClick={() => closeMenu()}
                aria-label="Click button to go to contact page"
              >
                <HoverBorderGradient>Contact Us</HoverBorderGradient>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const MobileChildNavItems = ({ navItem, closeMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative text-neutral-600 dark:text-neutral-300 flex w-full justify-between"
      >
        <motion.span className="block">{navItem.name}</motion.span>
        <IconChevronDown className="text-neutral-700 dark:text-neutral-300" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0 }}
            className="pl-4"
          >
            {navItem.children.map((child, childIdx) => (
              <Link
                key={`child-${childIdx}`}
                href={child.link}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <motion.span className="block mt-4" onClick={() => closeMenu()}>
                  {child.name}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, href, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {href ? (
        <Link href={href}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-neutral-700 dark:text-neutral-300 hover:opacity-[0.6]"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-neutral-700 dark:text-neutral-300 hover:opacity-[0.6]"
        >
          {item}
        </motion.p>
      )}

      {active !== null && active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <div>
              <motion.div
                transition={{ duration: 0.3 }}
                layoutId="active"
                className="bg-white dark:bg-slate-950 mt-4 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full dark:bg-slate-950  bg-white flex justify-center space-x-4 px-4 py-3 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
