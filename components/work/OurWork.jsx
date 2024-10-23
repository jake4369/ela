import { Carousel, Card } from "../ui/apple-cards-carousel";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div
      className="flex flex-col w-full h-full lg:w-[77.0833333333%] mx-auto"
      id="work"
      aria-labelledby="work-title"
    >
      <h2
        id="work-title"
        className="text-center text-4xl font-bold tracking-tight text-neutral-600 dark:text-neutral-50 md:text-6xl mb-6"
      >
        Our Work
      </h2>
      <p className="text-center md:w-[77.0833333333%] lg:w-[70%] mx-auto">
        We take immense pride in delivering top-tier pressure washing services
        that leave surfaces looking brand new. From driveways and decks to
        commercial properties, our results speak for themselves. Explore some of
        our recent projects below to see the difference professional pressure
        washing can make!
      </p>
      <Carousel items={cards} />
      <p className="mt-10 text-center mb-8 text-l">
        Click <strong>"View Gallery"</strong> to see more of our stunning
        results!
      </p>
      <Link
        href="/gallery"
        className="mx-auto"
        aria-label="Click button to view our gallery of pressure washing projects"
      >
        <HoverBorderGradient className="py-4 px-8">
          View Gallery
        </HoverBorderGradient>
      </Link>
    </div>
  );
}

const data = [
  {
    src: "/assets/images/carousel/drive.jpg",
    alt: "Clean driveway after pressure washing",
  },
  {
    src: "/assets/images/carousel/tarmac.jpg",
    alt: "Freshly washed tarmac surface",
  },
  {
    src: "/assets/images/carousel/roof.jpg",
    alt: "Roof before and after pressure washing",
  },
  {
    src: "/assets/images/about/crane.jpeg",
    alt: "Pressure washing walls from a crane",
  },
  {
    src: "/assets/images/carousel/barbers.jpg",
    alt: "Barbershop exterior cleaned",
  },
  {
    src: "/assets/images/carousel/gum.jpg",
    alt: "Removal of gum from pavement",
  },
  {
    src: "/assets/images/carousel/moss.jpg",
    alt: "Cleaning moss from a walkway",
  },
];

const OurWork = () => {
  return (
    <section>
      <AppleCardsCarousel />
    </section>
  );
};

export default OurWork;
