import Link from "next/link";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FocusCards } from "@/components/ui/focus-cards";

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
        <p className="mt-4 font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-10">
          From driveways to decks, and everything in between, we take pride in
          restoring surfaces to their original, pristine condition. Browse
          through our work to see the results we’ve delivered for satisfied
          customers, and discover how we can bring new life to your property.
        </p>
        <div className="flex mx-auto gap-4">
          <Link href="#images" className="">
            <HoverBorderGradient className="py-4">
              View Images
            </HoverBorderGradient>
          </Link>

          <Link href="#videos" className="mx-auto">
            <HoverBorderGradient className="py-4">
              View Videos
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}

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
  { title: "Example of our work", src: "/assets/images/gallery/25.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/26.jpg" },
  { title: "Example of our work", src: "/assets/images/gallery/27.jpeg" },
];

const Page = () => {
  return (
    <div>
      <SpotlightPreview />

      <div id="images" className="mb-40 w-[87.2%] mx-auto">
        <FocusCards cards={images} />
      </div>

      <div id="videos">Videos</div>
    </div>
  );
};

export default Page;
