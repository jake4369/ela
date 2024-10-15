import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { TracingBeam } from "../ui/tracing-beam";

const content = [
  {
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
    title: "Get A Quote",
    description:
      "Get in touch with us today to receive a free, no-obligation quote and discover how our expert pressure washing services can help restore and maintain the beauty of your property, all with no commitment required.",
  },
];

const Services = () => {
  //   return <StickyScroll content={content} />;
  return (
    <TracingBeam>
      {content.map((obj) => (
        <div key={obj.title} className="mb-24 w-[87.2%] mx-auto px-2 md:w-full">
          <h3 className="text-2xl md:text-4xl mb-4">{obj.title}</h3>

          <p className="text-l">{obj.description}</p>
        </div>
      ))}
    </TracingBeam>
  );
};

export default Services;
