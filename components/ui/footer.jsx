import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandGoogle,
  IconBrandYoutube,
} from "@tabler/icons-react";

const pages = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Services", href: "/#servicesSection" },
  { title: "Our Work", href: "/#work" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "FAQs", href: "/#faqs" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@elapressurewashing5332",
    icon: IconBrandYoutube,
  },
  {
    name: "Google",
    href: "https://g.co/kgs/ffnY4jb",
    icon: IconBrandGoogle,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ela_pressure_washing",
    icon: IconBrandTiktok,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61555129179931",
    icon: IconBrandFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ela.pressurewashing/",
    icon: IconBrandInstagram,
  },
];

export function CenteredWithLogo() {
  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-slate-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-700 dark:text-neutral-200 md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 text-center mb-4">
            <span className="block text-5xl font-bold text-neutral-900 dark:text-white">
              ELA
            </span>

            <span className="block mt-2 text-neutral-700 dark:text-neutral-200 leading-relaxed">
              Professional
              <br />
              Pressure Washing
            </span>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex sm:flex-row flex-col list-none gap-4 text-center text-neutral-700 dark:text-neutral-200">
              {pages.map((page) => (
                <li key={page.title}>
                  <Link
                    href={page.href}
                    className="transition-colors hover:text-neutral-950 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 rounded-sm"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>

        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-700 dark:text-neutral-300 mb-8 sm:mb-0">
            &copy; DevXDesigns
          </p>

          <nav
            aria-label="ELA social media"
            className="flex gap-4 items-center"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ELA on ${social.name} (opens in a new tab)`}
                  className="inline-flex items-center justify-center p-1 rounded-md text-neutral-700 dark:text-neutral-200 transition-colors hover:text-neutral-950 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      aria-hidden="true"
      style={{
        "--background": "#ffffff",
        "--color": "rgba(0, 0, 0, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",
        "--offset": offset || "200px",
        "--color-dark": "rgba(255, 255, 255, 0.2)",
        maskComposite: "exclude",
      }}
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    />
  );
};
