import { Carousel, Card } from "../ui/apple-cards-carousel";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col w-full h-full py-20 lg:w-[77.0833333333%] mx-auto">
      <h2 className="max-w-7xl text-center mb-14 pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
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
      <Link href="/gallery" className="mx-auto">
        <HoverBorderGradient className="py-4 px-8">
          View Gallery
        </HoverBorderGradient>
      </Link>
    </div>
  );
}

const data = [
  {
    src: "/assets/images/about/crane.jpeg",
  },
  {
    src: "/assets/images/about/crane.jpeg",
  },
  {
    src: "/assets/images/about/crane.jpeg",
  },

  {
    src: "/assets/images/about/crane.jpeg",
  },
  {
    src: "/assets/images/about/crane.jpeg",
  },
  {
    src: "/assets/images/about/crane.jpeg",
  },
];

const OurWork = () => {
  return (
    <section>
      <AppleCardsCarouselDemo />
    </section>
  );
};

export default OurWork;
