import { HeroParallax } from "@/components/ui/hero-parallax";
import AboutSection from "@/components/about/AboutSection";
import Services from "@/components/services/Services";
import OurWork from "@/components/work/OurWork";
import Reviews from "@/components/reviews/Reviews";
import FAQSection from "@/components/faqs/FAQSection";
import CTA from "@/components/cta/CTA";

const pageTitle = "Pressure Washing & Exterior Cleaning in Wolverhampton | ELA";

const pageDescription =
  "Professional pressure washing, driveway cleaning, roof cleaning, steam cleaning and exterior surface restoration in Wolverhampton and the West Midlands. Contact ELA for a free quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing And Steam Cleaning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/opengraph.png"],
  },
};

const products = [
  {
    id: 0,
    thumbnail: "/assets/images/hero/ela/hero.webp",
  },
  {
    id: 1,
    thumbnail: "/assets/images/hero/ela/hero1.jpg",
  },
  {
    id: 2,
    thumbnail: "/assets/images/hero/ela/hero2.jpg",
  },
  {
    id: 3,
    thumbnail: "/assets/images/hero/ela/hero3.jpg",
  },
  {
    id: 4,
    thumbnail: "/assets/images/hero/ela/hero4.jpg",
  },
  {
    id: 6,
    thumbnail: "/assets/images/hero/ela/hero6.jpg",
  },
  {
    id: 5,
    thumbnail: "/assets/images/hero/ela/hero5.png",
  },
  {
    id: 9,
    thumbnail: "/assets/images/hero/ela/hero9.jpg",
  },
  {
    id: 8,
    thumbnail: "/assets/images/hero/ela/hero8.jpg",
  },
  {
    id: 7,
    thumbnail: "/assets/images/hero/ela/hero7.jpg",
  },
];

export default function Home() {
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
}
