import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import LampDemo from "@/components/ui/lamp";

import { Spotlight } from "@/components/ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}

const images = [
  "/assets/images/gallery/1.jpg",
  "/assets/images/gallery/2.jpg",
  "/assets/images/gallery/3.jpg",
  "/assets/images/gallery/4.jpg",
  "/assets/images/gallery/5.jpg",
  "/assets/images/gallery/6.jpg",
  "/assets/images/gallery/7.jpg",
  "/assets/images/gallery/8.jpg",
  "/assets/images/gallery/9.jpg",
  "/assets/images/gallery/10.jpg",
  "/assets/images/gallery/11.jpg",
  "/assets/images/gallery/12.jpg",
  "/assets/images/gallery/13.jpg",
  "/assets/images/gallery/14.jpg",
  "/assets/images/gallery/15.jpg",
  "/assets/images/gallery/16.jpg",
  "/assets/images/gallery/17.jpg",
  "/assets/images/gallery/18.jpg",
  "/assets/images/gallery/19.jpg",
  "/assets/images/gallery/20.jpg",
  "/assets/images/gallery/21.jpg",
  "/assets/images/gallery/22.jpg",
  "/assets/images/gallery/23.jpg",
  "/assets/images/gallery/25.jpg",
  "/assets/images/gallery/26.jpg",
  "/assets/images/gallery/27.jpeg",
];

const Page = () => {
  return (
    <div className="mb-80">
      <LampDemo>
        <h1 className="mb-2">Gallery</h1>
        <p className="text-sm">Scroll down to see our work</p>
      </LampDemo>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Page;
