import { HeroParallax } from "@/components/ui/hero-parallax";
import AboutSection from "@/components/about/AboutSection";
import Services from "@/components/services/Services";
import OurWork from "@/components/work/OurWork";

const products = [
  {
    thumbnail: "/assets/images/hero/hero.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero1.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero2.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero3.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero4.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero5.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero6.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero7.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero8.jpg",
  },
  {
    thumbnail: "/assets/images/hero/hero9.jpg",
  },
];

const Home = () => {
  return (
    <>
      <HeroParallax products={products} />
      <AboutSection />
      <Services />
      <OurWork />
    </>
  );
};

export default Home;
