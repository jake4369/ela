import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { FocusCards } from "@/components/ui/focus-cards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CTAWithDashedGridLines } from "@/components/ui/cta-dashed";

const images = [
  { title: "Example of our work", src: "/assets/images/gallery/1.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/2.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/3.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/4.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/5.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/6.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/7.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/8.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/9.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/10.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/11.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/12.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/13.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/14.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/15.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/16.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/17.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/18.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/19.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/20.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/21.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/22.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/23.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/24.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/25.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/26.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/27.jpeg" },
  { title: "Example of our work", src: "/assets/images/gallery/28.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/29.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/30.jpg" },
];

const items = [
  {
    id: 0,
    designation: "Follow us",
    name: "ELA Tiktok channel",
    image: "/assets/images/cta/tiktok.jpeg",
    href: "https://www.tiktok.com/@ela_pressure_washing",
  },
  {
    id: 1,
    designation: "Follow us",
    name: "ELA Youtube channel",
    image: "/assets/images/cta/youtube.png",
    href: "https://www.youtube.com/@elapressurewashing5332",
  },
  {
    id: 2,
    designation: "Follow us",
    name: "ELA Instagram profile",
    image: "/assets/images/cta/instagram.png",
    href: "https://www.instagram.com/ela.pressurewashing/",
  },
  {
    id: 3,
    designation: "Follow us",
    name: "ELA Facebook page",
    image: "/assets/images/cta/facebook.png",
    href: "https://www.facebook.com/profile.php?id=61555129179931&sk=photos",
  },
];

function SpotlightPreview() {
  return (
    <div className=" h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Gallery
        </h1>
        <div className="relative">
          <p className="mt-4 font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-14">
            Explore our work and see how our expert services, including
            high-pressure washing, soft washing, and chemical treatments, have
            restored the original charm and integrity of various surfaces. Let
            these visuals inspire you to enhance the beauty of your own
            property!
          </p>

          <p className="font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-14">
            <strong>Scoll down and enjoy our work!</strong>
          </p>

          <div class="scroll-downs">
            <div class="mousey">
              <div class="mousey-scroller"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <SpotlightPreview />

      <div id="images" className="mb-32 w-[87.2%] mx-auto">
        <FocusCards cards={images} />
      </div>

      <div>
        <h2 className="text-center mb-8 text-xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-2xl">
          Follow us on social media to see more of our results
        </h2>

        <div className="flex justify-center mx-auto">
          <AnimatedTooltip items={items} />
        </div>
      </div>

      <CTAWithDashedGridLines />
    </div>
  );
};

export default Page;
