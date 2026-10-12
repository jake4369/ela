import { Spotlight } from "@/components/ui/spotlight";
import { FocusCards } from "@/components/ui/focus-cards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CTAWithDashedGridLines } from "@/components/ui/cta-dashed";

// ==========================================
// GALLERY PAGE SEO METADATA
// ==========================================

const pageTitle = "Pressure Washing & Exterior Cleaning Gallery | ELA";

const pageDescription =
  "Explore ELA Pressure Washing's exterior cleaning projects and results. View our gallery and request a quote in Wolverhampton and the West Midlands.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  // Unique canonical URL for the gallery
  alternates: {
    canonical: "/gallery",
  },

  // Facebook, LinkedIn and other social previews
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/gallery",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior cleaning gallery",
      },
    ],
  },

  // Twitter / X sharing
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/opengraph.png"],
  },
};

// ==========================================
// GALLERY PHOTOGRAPHS
// ==========================================

// Image titles are unique so they can also be used
// safely as React keys by the FocusCards component.
//
// These are temporary, neutral titles. Actual image
// descriptions should be added after reviewing each
// photograph.

const galleryImages = [
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
  "/assets/images/gallery/24.jpg",
  "/assets/images/gallery/25.jpg",
  "/assets/images/gallery/26.jpg",
  "/assets/images/gallery/27.jpeg",
  "/assets/images/gallery/28.jpg",
  "/assets/images/gallery/29.jpg",
  "/assets/images/gallery/30.jpg",
];

const images = galleryImages.map((src, index) => ({
  title: `ELA Exterior Cleaning Project ${index + 1}`,
  src,
}));

// ==========================================
// SOCIAL MEDIA LINKS
// ==========================================

const items = [
  {
    id: 0,
    designation: "Follow us",
    name: "ELA TikTok channel",
    image: "/assets/images/cta/tiktok.jpeg",
    href: "https://www.tiktok.com/@ela_pressure_washing",
  },
  {
    id: 1,
    designation: "Follow us",
    name: "ELA YouTube channel",
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

// ==========================================
// GALLERY HERO SECTION
// ==========================================

function SpotlightPreview() {
  return (
    <div className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Pressure Washing & Exterior Cleaning Gallery
        </h1>

        <div className="relative">
          <p className="mt-6 font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-10">
            Explore examples of exterior cleaning work carried out by ELA
            Pressure Washing. From pressure washing and soft washing to
            specialist cleaning and surface restoration, discover how
            professional cleaning can transform the appearance of outdoor
            spaces.
          </p>

          <p className="font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-14">
            <strong>Scroll down to explore our work!</strong>
          </p>

          {/* Scroll indicator */}
          <div
            className="scroll-downs"
            role="img"
            aria-label="Scroll down to view our project gallery"
          >
            <div className="mousey">
              <div className="mousey-scroller" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// GALLERY PAGE
// ==========================================

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Page heading and introduction */}
      <SpotlightPreview />

      {/* Project photographs */}
      <section
        id="images"
        className="mb-32 w-[87.2%] mx-auto"
        aria-labelledby="gallery-heading"
      >
        <h2 id="gallery-heading" className="sr-only">
          Our Exterior Cleaning Projects
        </h2>

        <FocusCards cards={images} />
      </section>

      {/* Social media */}
      <section className="w-full" aria-labelledby="social-heading">
        <h2
          id="social-heading"
          className="text-center mb-8 text-xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-2xl px-4"
        >
          Follow ELA Pressure Washing for More Results
        </h2>

        <p className="mx-auto mb-8 max-w-2xl px-6 text-center text-base text-neutral-500 dark:text-neutral-300">
          Discover more of our exterior cleaning projects, before-and-after
          results and updates on our social media channels.
        </p>

        <div className="flex justify-center mx-auto">
          <AnimatedTooltip items={items} />
        </div>
      </section>

      {/* Contact CTA */}
      <CTAWithDashedGridLines />
    </div>
  );
};

export default Page;
