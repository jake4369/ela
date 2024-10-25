import Image from "next/image";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Spotlight } from "@/components/ui/spotlight";
import { CTAWithDashedGridLines } from "@/components/ui/cta-dashed";

const content = [
  {
    image: "/assets/images/about/header.jpg",
    title: "Cleaning",
    description:
      "Our expert cleaning services are designed to restore and rejuvenate the appearance of outdoor surfaces by removing accumulated dirt, algae, grime, and organic matter. Whether it’s walkways, driveways, patios, or walls, we use the latest cleaning techniques and equipment to ensure a thorough clean, bringing back the original beauty of your property and enhancing its overall appeal.",
  },
  {
    title: "High Pressure Wash",
    description:
      "High-pressure washing uses powerful water jets to remove years of embedded dirt, grime, and stains from hard surfaces such as concrete, brick, and stone. This method is perfect for removing tough contaminants like oil stains, graffiti, and stubborn buildup, leaving surfaces looking fresh and revitalized. It’s a deep-clean solution ideal for heavily soiled areas that require a strong, effective cleaning approach.",
  },
  {
    title: "Steam Cleaning",
    description:
      "Our steam cleaning service provides a chemical-free, eco-friendly way to deep clean a variety of surfaces. Using high-temperature steam, we effectively remove dirt, grease, bacteria, and allergens without harsh chemicals. Ideal for tiles, grout, upholstery, and some outdoor areas, steam cleaning penetrates deep to lift tough contaminants. This method not only sanitizes but also restores surfaces, making it a safe and effective choice for homes and businesses looking for a thorough clean.",
  },
  {
    title: "Soft Wash",
    description:
      "Our soft washing service offers a gentle, non-abrasive cleaning solution for delicate surfaces such as roofs, siding, and painted exteriors. Using a combination of low-pressure water and biodegradable cleaning agents, we safely remove dirt, mold, algae, and other contaminants without the risk of damage. Soft washing is perfect for maintaining the integrity of fragile surfaces while achieving a long-lasting clean.",
  },
  {
    title: "Chemical Treatments",
    description:
      "Chemical treatments provide an extra level of cleaning power, targeting deep-seated stains, mold, mildew, and other contaminants that standard cleaning methods may struggle to remove. By using specialized cleaning solutions, we break down and eliminate these unwanted substances, ensuring a thorough clean that enhances the appearance and durability of your surfaces. This treatment is especially useful for surfaces that have been neglected or require heavy-duty cleaning.",
  },
  {
    title: "Acid Cleaning for New Homes",
    description:
      "Acid cleaning is a specialized process we use to remove construction debris, mortar stains, and other residues from brickwork, stone, and concrete surfaces in new build homes. This method involves the safe application of a mild acid solution, which dissolves and cleans away tough stains, leaving the surfaces fresh and spotless. Our team is highly trained in handling the process efficiently and safely, ensuring no damage to the surfaces while delivering a pristine finish.",
  },
  {
    title: "Sealing",
    description:
      "Our professional sealing services offer long-term protection for outdoor surfaces like patios, driveways, and decks. By applying a high-quality sealant, we create a protective layer that guards against moisture, stains, weathering, and UV damage. This not only extends the life of your surfaces but also enhances their appearance, making them easier to clean and maintain. Sealing helps preserve the beauty and structural integrity of your investment.",
  },
  {
    title: "Water-Based Sealers",
    description:
      "Water-based sealers are an eco-friendly option for protecting outdoor surfaces without the use of harsh chemicals. These non-toxic, low-VOC sealants provide effective protection against moisture, staining, and environmental wear, while allowing the surface to breathe. Ideal for patios, pavers, and other porous materials, our water-based sealers ensure long-lasting durability while maintaining a natural, attractive finish.",
  },
  {
    title: "Roof Scraping",
    description:
      "Roof scraping is an essential maintenance service for removing moss, lichen, and other debris that can accumulate on your roof over time. Left unchecked, this buildup can cause damage to shingles, block drainage systems, and lead to long-term issues like leaks. Our roof scraping service carefully and effectively removes these materials, ensuring that your roof stays clean, functional, and in good condition, without causing any damage to the roofing materials.",
  },
  {
    title: "Biocide Treatments",
    description:
      "Our biocide treatments are designed to eliminate and prevent the regrowth of harmful organic matter such as moss, algae, lichen, and fungi. Applied after cleaning, these treatments work to kill the root causes of growth, providing long-term protection for your surfaces. Ideal for roofs, walls, and other outdoor areas, biocide treatments help maintain a cleaner, healthier environment by stopping the recurrence of organic growth.",
  },
  {
    title: "Driveway Sinkage Lifting",
    description:
      "Over time, driveways can experience sinking or uneven surfaces due to soil movement, poor installation, or heavy traffic. Our driveway sinkage lifting service corrects these issues by carefully raising the sunken sections and restoring them to their original level. This process not only improves the overall appearance of your driveway but also enhances safety by eliminating trip hazards and ensuring proper water drainage.",
  },
  {
    title: "Re-pointing Patios",
    description:
      "Re-pointing your patio involves renewing the mortar between bricks or stones, which can crack and deteriorate over time due to weather exposure and natural wear. Our re-pointing service restores the structure and appearance of your patio, providing a fresh, clean finish while ensuring the stability of the surface. By replacing old, crumbling mortar with new material, we help prevent water penetration and extend the lifespan of your patio.",
  },
  {
    title: "Graffiti Removal",
    description:
      "Our graffiti removal service utilizes specialized techniques and eco-friendly products to effectively remove unwanted graffiti from walls, fences, and other surfaces. We restore the original look of your property while ensuring that the removal process is safe and effective.",
  },
  {
    title: "Chewing Gum Removal",
    description:
      "We provide thorough chewing gum removal services for both commercial and residential properties. Using advanced cleaning methods, we safely and efficiently eliminate chewing gum from surfaces without causing damage, ensuring a clean and welcoming environment.",
  },
  {
    title: "Heritage Brickwork Care",
    description:
      "Our heritage brickwork care service focuses on preserving the beauty and integrity of historic brick surfaces. We employ gentle cleaning methods and treatments, using specialized equipment to remove stains and organic growth while ensuring that the heritage value of the brickwork is maintained.",
    href: "https://historicengland.org.uk/advice/technical-advice/buildings/",
  },
];

function SpotlightPreview() {
  return (
    <div
      className="h-[100vh] w-full rounded-md flex md:items-center md:justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden"
      role="banner" // Indicates this is a header region for assistive technologies
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex flex-col p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          aria-label="Our Services" // Provides context for screen readers
        >
          Our Services
        </h1>
        <div className="relative">
          <p className="mt-4 font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-8">
            We provide professional cleaning and maintenance services to keep
            your property in top shape. From pressure washing to soft washing,
            roof cleaning, and sealing, our expert team handles all your outdoor
            care needs. With a focus on quality and eco-friendly solutions, we
            ensure your home or business looks great and stays protected.
          </p>

          <p className="font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-14">
            <strong>Scroll down and explore our services below!</strong>
          </p>

          <div className="scroll-downs" role="img" aria-label="Scroll down">
            <div className="mousey">
              <div className="mousey-scroller"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <SpotlightPreview />
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={`Thumbnail for ${item.title}`} // Descriptive alt text for accessibility
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                <h2 className="mb-4 text-2xl md:text-4xl">{item.title}</h2>{" "}
                {/* Changed to h2 for better SEO structure */}
                <p className={`text-base ${item.href && "mb-4"}`}>
                  {item.description}
                </p>
                {item.href ? (
                  <p>
                    Learn more about cleaning heritage sites{" "}
                    <Link href={item.href} className="underline">
                      <strong>here</strong>
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>

      <CTAWithDashedGridLines />
    </>
  );
};

export default Page;
