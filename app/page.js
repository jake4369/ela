import { HeroParallax } from "@/components/ui/hero-parallax";
import AboutSection from "@/components/about/AboutSection";
import Services from "@/components/services/Services";
import OurWork from "@/components/work/OurWork";
import Reviews from "@/components/reviews/Reviews";
import FAQSection from "@/components/faqs/FAQSection";
import CTA from "@/components/cta/CTA";

const products = [
  {
    id: 0,
    thumbnail: "/assets/images/hero/hero.jpg",
  },
  {
    id: 1,
    thumbnail: "/assets/images/hero/hero1.jpg",
  },
  {
    id: 2,
    thumbnail: "/assets/images/hero/hero2.jpg",
  },
  {
    id: 3,
    thumbnail: "/assets/images/hero/hero3.jpg",
  },
  {
    id: 4,
    thumbnail: "/assets/images/hero/hero4.jpg",
  },
  {
    id: 5,
    thumbnail: "/assets/images/hero/hero5.jpg",
  },
  {
    id: 6,
    thumbnail: "/assets/images/hero/hero6.jpg",
  },
  {
    id: 7,
    thumbnail: "/assets/images/hero/hero7.jpg",
  },
  {
    id: 8,
    thumbnail: "/assets/images/hero/hero8.jpg",
  },
  {
    id: 9,
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
      <Reviews />
      <FAQSection />
      <CTA />
    </>
  );
};

export default Home;
