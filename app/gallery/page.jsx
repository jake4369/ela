import { Spotlight } from "@/components/ui/spotlight";
import { FocusCards } from "@/components/ui/focus-cards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CTAWithDashedGridLines } from "@/components/ui/cta-dashed";

const pageTitle = "Pressure Washing & Exterior Cleaning Gallery | ELA";

const pageDescription =
  "Explore ELA Pressure Washing's exterior cleaning projects and results. View our gallery and request a quote in Wolverhampton and the West Midlands.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/gallery",
  },
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
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/assets/opengraph.png"],
  },
};

const relatedServices = {
  driveway: {
    href: "/services/driveway-cleaning",
    label: "Explore driveway cleaning",
  },
  patio: {
    href: "/services/patio-cleaning",
    label: "Explore patio cleaning",
  },
  roof: {
    href: "/services/roof-cleaning",
    label: "Explore roof cleaning",
  },
  commercial: {
    href: "/services/commercial-pressure-washing",
    label: "Explore commercial cleaning",
  },
  heritage: {
    href: "/services/heritage-brickwork-cleaning",
    label: "Explore heritage brickwork care",
  },
};

const galleryProjects = [
  {
    src: "/assets/images/gallery/1.jpg",
    title: "Roof Tile Cleaning in Progress",
    alt: "Long-reach rotary cleaning attachment on a moss-covered tiled roof",
    description:
      "An extendable cleaning tool working across a pitched residential roof with visible organic growth.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/2.jpg",
    title: "Tiled Roof Cleaning Comparison",
    alt: "Aerial view of a roof with lighter and darker sections of tiles",
    description:
      "An aerial photograph showing the contrast between lighter roof tiles and an area with darker surface deposits.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/3.jpg",
    title: "Shopfront Paved Walkway",
    alt: "Block-paved pedestrian walkway outside a row of retail shops",
    description:
      "Brick-paved pedestrian area outside commercial units and shopfronts.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/4.jpg",
    title: "Retail Forecourt Cleaning",
    alt: "Wet paved retail forecourt with circular surface-cleaning equipment",
    description:
      "A commercial shopping forecourt with surface-cleaning equipment beside the paved pedestrian area.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/5.jpg",
    title: "Residential Block-Paved Driveway",
    alt: "Light-coloured block-paved driveway next to a residential garage",
    description:
      "Decorative block paving forming a residential driveway and entrance area.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/6.jpg",
    title: "Red Patterned Concrete Driveway",
    alt: "Red patterned concrete driveway outside a brick residential property",
    description:
      "A red, stone-effect patterned driveway extending from the street to the front of a house.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/7.jpg",
    title: "Block-Paved Residential Forecourt",
    alt: "Large multicoloured block-paved forecourt outside a brick house",
    description:
      "Residential parking area finished with decorative block paving and a contrasting border.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/8.jpg",
    title: "Retail Walkway and Shopfronts",
    alt: "Brick-paved walkway outside a row of shops and a planted area",
    description:
      "Commercial pedestrian paving running alongside a row of retail premises.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/9.jpg",
    title: "Covered Shopping Walkway Cleaning",
    alt: "Worker cleaning brick paving beneath a covered shopping walkway",
    description:
      "Exterior cleaning in progress along a covered pedestrian route outside local shops.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/10.jpg",
    title: "Dark Patterned Residential Driveway",
    alt: "Large dark patterned driveway outside a modern residential property",
    description:
      "Expansive dark-coloured decorative driveway in front of a house and garage.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/11.jpg",
    title: "Roof Tile Cleaning Close-Up",
    alt: "Long-reach cleaning equipment working across dark moss-covered roof tiles",
    description:
      "Close-up view of roof cleaning equipment positioned on a pitched tiled roof.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/12.jpg",
    title: "Roof Cleaning from Above",
    alt: "Aerial view of a tiled roof with visibly contrasting lighter and darker areas",
    description:
      "Aerial view showing contrasting sections of a pitched roof during an exterior cleaning project.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/13.jpg",
    title: "Garden Patio Paving",
    alt: "Large garden patio with rectangular paving slabs and a hose reel",
    description:
      "Residential paved patio surrounded by garden planting, fencing and brickwork.",
    service: "patio",
  },
  {
    src: "/assets/images/gallery/14.jpg",
    title: "Dark Residential Driveway Surface",
    alt: "Dark textured driveway with a decorative block-paved border",
    description:
      "Residential driveway with a dark surface and contrasting paving blocks around its edges.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/15.jpg",
    title: "Multi-Coloured Block-Paved Driveway",
    alt: "Multicoloured block-paved driveway in front of a brick house and garage",
    description:
      "A residential forecourt with a mix of red, buff and grey paving blocks.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/16.jpg",
    title: "Decorative Block-Paved Driveway",
    alt: "Wide residential driveway with patterned block paving and contrasting edging",
    description:
      "Decorative driveway paving extending across the frontage and side access of a bungalow.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/17.jpg",
    title: "Block-Paved Side Passage",
    alt: "Narrow block-paved driveway passage between two brick residential properties",
    description:
      "Paved side access route leading between houses towards a garage.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/18.jpg",
    title: "Detailed Brick-Paved Driveway",
    alt: "Red and dark block paving with a contrasting border beside a house",
    description:
      "Close view of a patterned brick-paved driveway with contrasting block edging.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/19.jpg",
    title: "Driveway and ELA Service Vehicle",
    alt: "Wide dark residential driveway with an ELA Pressure Washing van nearby",
    description:
      "A dark-coloured driveway outside a residential property, photographed alongside ELA's service vehicle.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/20.jpg",
    title: "Large Dark Residential Driveway",
    alt: "Large dark textured driveway outside a detached garage and house",
    description:
      "Spacious residential driveway with a contrasting block-paved perimeter.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/21.jpg",
    title: "Commercial Entrance Paving",
    alt: "Paved entrance outside a commercial building with wet cleaning areas",
    description:
      "Commercial pedestrian paving and building frontage photographed during exterior cleaning work.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/22.jpg",
    title: "Shopfront Paving Cleaning",
    alt: "Cleaning tool and foamy water on brick paving outside retail premises",
    description:
      "Exterior cleaning in progress on a brick-paved walkway beside commercial shopfronts.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/23.jpg",
    title: "Roof Cleaning from an Access Platform",
    alt: "Worker on a mobile access platform cleaning a pitched tiled roof",
    description:
      "Roof cleaning equipment operated from an elevated working platform beside a residential building.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/24.jpg",
    title: "Large Red-Brick Building Exterior",
    alt: "Wide view of a multi-storey red-brick building with stone detailing",
    description:
      "A substantial brick building with traditional architectural details and a brick boundary wall.",
    service: "heritage",
  },
  {
    src: "/assets/images/gallery/25.jpg",
    title: "Paved Garden Walkway",
    alt: "Garden paving and stone steps running alongside red-brick boundary walls",
    description:
      "A paved outdoor walkway and steps bordered by brick walls and planting areas.",
    service: "patio",
  },
  {
    src: "/assets/images/gallery/26.jpg",
    title: "Industrial Walkway Cleaning",
    alt: "Wet concrete walkway between red metal safety barriers in an industrial building",
    description:
      "Concrete floor and access route within an industrial environment.",
    service: "commercial",
  },
  {
    src: "/assets/images/gallery/27.jpeg",
    title: "High-Level Brickwork Cleaning",
    alt: "Worker in an elevated access platform alongside a multi-storey brick facade",
    description:
      "An elevated working platform positioned beside the upper brickwork of a large building.",
    service: "heritage",
  },
  {
    src: "/assets/images/gallery/28.jpg",
    title: "Residential Roof Cleaning Comparison",
    alt: "Aerial photograph of a roof with lighter cleaned-looking tiles beside darker tiles",
    description:
      "Elevated view showing a clear contrast between two sections of a pitched residential tiled roof.",
    service: "roof",
  },
  {
    src: "/assets/images/gallery/29.jpg",
    title: "Dark Patterned Driveway Along Terrace",
    alt: "Black patterned driveway outside a row of traditional brick houses",
    description:
      "Dark decorative driveway paving extending across the front of a brick residential property.",
    service: "driveway",
  },
  {
    src: "/assets/images/gallery/30.jpg",
    title: "Black Patterned Residential Driveway",
    alt: "Large black patterned driveway with a taped-off edge outside a house",
    description:
      "Dark patterned paving covering a residential forecourt and entrance area.",
    service: "driveway",
  },
];

const images = galleryProjects.map(({ service, ...project }) => ({
  ...project,
  serviceLink: service ? relatedServices[service] : null,
}));

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

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <SpotlightPreview />

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

      <CTAWithDashedGridLines />
    </div>
  );
}
