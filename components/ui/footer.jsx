import { cn } from "@/lib/utils";
import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandGoogle,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

// export function CenteredWithLogo() {
//   const pages = [
//     {
//       title: "Home",
//       href: "/",
//     },
//     {
//       title: "About",
//       href: "#about",
//     },
//     {
//       title: "Services",
//       href: "#servicesSection",
//     },
//     {
//       title: "Our Work",
//       href: "#work",
//     },
//     {
//       title: "Testimonials",
//       href: "#testimonials",
//     },
//     {
//       title: "FAQs",
//       href: "#faqs",
//     },
//     {
//       title: "Contact",
//       href: "/contact",
//     },
//   ];

//   return (
//     <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-slate-950 w-full relative overflow-hidden">
//       <div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
//         <div className="flex flex-col items-center justify-center w-full relative">
//           <div className="mr-0 md:mr-4 text-center mb-4">
//             <span className="text-5xl">ELA</span>
//             <span>
//               <br /> Professional <br /> Pressure Washing
//             </span>
//           </div>

//           <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4 text-center">
//             {pages.map((page, idx) => (
//               <li key={"pages" + idx} className="list-none">
//                 <Link
//                   className="transition-colors hover:text-text-neutral-800 "
//                   href={page.href}
//                 >
//                   {page.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
//         </div>
//         <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
//           <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
//             &copy; DevXDesigns
//           </p>
//           <div className="flex gap-4">
//             <Link
//               href="https://www.youtube.com/@elapressurewashing5332"
//               target="_blank"
//             >
//               <IconBrandYoutube className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
//             </Link>
//             <Link href="https://g.co/kgs/ffnY4jb" target="_blank">
//               <IconBrandGoogle className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
//             </Link>
//             <Link
//               href="https://www.tiktok.com/@ela_pressure_washing"
//               target="_blank"
//             >
//               <IconBrandTiktok className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
//             </Link>
//             <Link
//               href="https://www.facebook.com/profile.php?id=100083060296284"
//               target="_blank"
//             >
//               <IconBrandFacebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
//             </Link>
//             <Link
//               href="https://www.instagram.com/ela.pressurewashing/"
//               target="_blank"
//             >
//               <IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const GridLineHorizontal = ({ className, offset }) => {
//   return (
//     <div
//       style={{
//         "--background": "#ffffff",
//         "--color": "rgba(0, 0, 0, 0.2)",
//         "--height": "1px",
//         "--width": "5px",
//         "--fade-stop": "90%",

//         //-100px if you want to keep the line inside
//         "--offset": offset || "200px",

//         "--color-dark": "rgba(255, 255, 255, 0.2)",
//         maskComposite: "exclude",
//       }}
//       className={cn(
//         "w-[calc(100%+var(--offset))] h-[var(--height)]",
//         "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
//         "[background-size:var(--width)_var(--height)]",
//         "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
//         "[mask-composite:exclude]",
//         "z-30",
//         "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
//         className
//       )}
//     ></div>
//   );
// };

export function CenteredWithLogo() {
  const pages = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#servicesSection" },
    { title: "Our Work", href: "#work" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "FAQs", href: "#faqs" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-slate-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4 text-center mb-4">
            <span className="text-5xl">ELA</span>
            <span>
              <br /> Professional <br /> Pressure Washing
            </span>
          </div>

          <nav>
            <ul
              className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4 text-center"
              role="navigation"
            >
              {pages.map((page, idx) => (
                <li key={`page-${idx}`} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800"
                    href={page.href}
                    aria-label={`Navigate to ${page.title}`} // Accessibility enhancement
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
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
            &copy; DevXDesigns
          </p>

          <div
            className="flex gap-4"
            aria-label="Follow us on social media"
            role="group"
          >
            <h4 className="sr-only">Follow us on social media</h4>
            <Link
              href="https://www.youtube.com/@elapressurewashing5332"
              target="_blank"
              aria-label="Visit our YouTube channel"
            >
              <IconBrandYoutube className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link
              href="https://g.co/kgs/ffnY4jb"
              target="_blank"
              aria-label="Visit our Google page"
            >
              <IconBrandGoogle className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link
              href="https://www.tiktok.com/@ela_pressure_washing"
              target="_blank"
              aria-label="Visit our TikTok profile"
            >
              <IconBrandTiktok className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61555129179931"
              target="_blank"
              aria-label="Visit our Facebook page"
            >
              <IconBrandFacebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link
              href="https://www.instagram.com/ela.pressurewashing/"
              target="_blank"
              aria-label="Visit our Instagram profile"
            >
              <IconBrandInstagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
        className
      )}
    ></div>
  );
};
