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
    alt: "Large traditional red-brick building with stone architectural details and a black metal boundary fence",
  },
  {
    id: 1,
    thumbnail: "/assets/images/hero/ela/hero1.jpg",
    alt: "Wide residential driveway leading to a red-brick house, with a gravel path and landscaped front garden",
  },
  {
    id: 2,
    thumbnail: "/assets/images/hero/ela/hero2.jpg",
    alt: "Large dark residential driveway with contrasting brick-paved borders outside a detached house",
  },
  {
    id: 3,
    thumbnail: "/assets/images/hero/ela/hero3.jpg",
    alt: "Wet black patterned driveway outside a residential property, with safety tape across the entrance",
  },
  {
    id: 4,
    thumbnail: "/assets/images/hero/ela/hero4.jpg",
    alt: "Red-brick residential property with roof access equipment and an ELA Pressure Washing van outside",
  },
  {
    id: 6,
    thumbnail: "/assets/images/hero/ela/hero6.jpg",
    alt: "ELA Pressure Washing operative using a cleaning lance on the Morville Street sign in Webheath",
  },
  {
    id: 5,
    thumbnail: "/assets/images/hero/ela/hero5.png",
    alt: "Elevated view of a red-brick residential property with tiled roofs, a driveway and detached garages",
  },
  {
    id: 9,
    thumbnail: "/assets/images/hero/ela/hero9.jpg",
    alt: "ELA Pressure Washing cleaning trailer parked beside a wet road junction during exterior cleaning work",
  },
  {
    id: 8,
    thumbnail: "/assets/images/hero/ela/hero8.jpg",
    alt: "Clean-looking multicoloured stone-paved garden patio beside a house with glass doors and a conservatory",
  },
  {
    id: 7,
    thumbnail: "/assets/images/hero/ela/hero7.jpg",
    alt: "ELA Pressure Washing operative cleaning a metal roller shutter door at commercial premises",
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
