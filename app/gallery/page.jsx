import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import LampDemo from "@/components/ui/lamp";

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
      <LampDemo>Gallery</LampDemo>
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Page;
