import Image from "next/image";
import Link from "next/link";

import { TracingBeam } from "@/components/ui/tracing-beam";
import { Spotlight } from "@/components/ui/spotlight";
import { CTAWithDashedGridLines } from "@/components/ui/cta-dashed";

const pageTitle =
  "Exterior Cleaning Services in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Explore pressure washing, driveway and patio cleaning, roof cleaning, steam cleaning and sealing in Wolverhampton and the West Midlands. Request a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing exterior cleaning services",
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

const content = [
  {
    image: "/assets/images/about/header.jpg",
    title: "Driveway, Patio & Exterior Cleaning",
    description:
      "Restore the appearance of your property's outdoor surfaces with professional exterior cleaning from ELA Pressure Washing. We clean driveways, patios, paths, walls and other suitable hard surfaces, removing built-up dirt, algae, moss and grime. Serving homes and businesses across Wolverhampton and the West Midlands, we select cleaning methods suited to the surface and its condition to achieve a thorough, professional finish.",

    pageLinks: [
      {
        href: "/services/driveway-cleaning",
        text: "Explore our driveway cleaning service",
      },
      {
        href: "/services/patio-cleaning",
        text: "Explore our patio cleaning service",
      },
    ],
  },
  {
    title: "High-Pressure Washing",
    description:
      "High-pressure washing is an effective way to remove stubborn dirt and surface contamination from suitable hard-wearing materials, including concrete, paving and some types of brickwork. Our professional pressure washing equipment can tackle heavily soiled driveways, patios, pedestrian areas and commercial outdoor spaces. We assess the material and condition of each surface before choosing an appropriate cleaning pressure and technique.",
    pageLinks: [
      {
        href: "/services/commercial-pressure-washing",
        text: "Explore our commercial pressure washing service",
      },
    ],
  },
  {
    title: "Exterior Steam Cleaning",
    description:
      "ELA Pressure Washing provides professional exterior steam cleaning for suitable hard surfaces and areas affected by stubborn grime. Our van-mounted equipment enables us to use high-temperature cleaning methods to help loosen and remove accumulated dirt, grease and surface contamination. Steam cleaning can be particularly useful where heat-assisted cleaning is appropriate, including selected paving, masonry and commercial exterior surfaces. We choose the cleaning method according to the material and the work required.",

    pageLinks: [
      {
        href: "/services/steam-cleaning",
        text: "Explore our professional steam cleaning service",
      },
    ],
  },
  {
    title: "Soft Washing",
    description:
      "Not every exterior surface is suitable for high-pressure washing. Soft washing uses a lower-pressure application and appropriate cleaning treatments to address dirt, algae and organic growth on more delicate surfaces. This approach may be suitable for certain roofs, rendered walls, painted exteriors and other surfaces that require a gentler cleaning method. Our team assesses the condition and material of each area before recommending a suitable treatment.",
  },
  {
    title: "Chemical Treatments",
    description:
      "Some exterior stains and organic deposits require more than water alone. Our specialist cleaning treatments can help address algae, moss, lichen, staining and other contamination on suitable outdoor surfaces. We select cleaning products and application methods according to the material, its condition and the type of contamination, helping achieve more effective results as part of a professional exterior cleaning service.",
  },
  {
    title: "New-Build Brickwork & Acid Cleaning",
    description:
      "Newly constructed properties can be left with mortar residue, cement staining and other building-related marks on exterior brickwork and hard surfaces. Our new-build cleaning service includes specialist acid cleaning where appropriate for the material and type of staining. We assess the surface before selecting a treatment, taking care to use methods suitable for the brickwork, stone or concrete involved.",
  },
  {
    title: "Driveway & Patio Sealing",
    description:
      "Professional surface sealing can help protect suitable driveways, patios and paved areas following cleaning. Depending on the material and sealant used, sealing may help reduce the absorption of moisture and staining while making routine maintenance easier. ELA Pressure Washing can advise on suitable sealing options for outdoor surfaces, helping customers maintain their appearance and condition over time.",
  },
  {
    title: "Water-Based Surface Sealing",
    description:
      "Water-based sealers offer an alternative to solvent-based products for certain types of outdoor paving and other suitable surfaces. Depending on the product and material, they can help provide protection against moisture, staining and everyday wear while retaining a natural-looking finish. We consider the surface type and required finish when selecting an appropriate sealing treatment.",
  },
  {
    title: "Roof Moss Removal & Scraping",
    description:
      "Moss and organic debris can accumulate on roof tiles, particularly in shaded or damp conditions. Our roof scraping service focuses on carefully removing moss and loose buildup using methods appropriate for the roofing material and its condition. Removing this accumulation can improve the roof's appearance and help reduce debris entering gutters and drainage channels. Additional treatments may be recommended where suitable.",
    pageLinks: [
      {
        href: "/services/roof-cleaning",
        text: "Explore our roof cleaning and moss removal service",
      },
    ],
  },
  {
    title: "Biocide Treatments",
    description:
      "Biocide treatments can be used as part of an exterior cleaning programme to address moss, algae, lichen and other organic growth. Applied where suitable, these specialist treatments can help control remaining biological contamination and discourage regrowth over time. They may be used on selected roofs, walls, paving and other outdoor surfaces following assessment and cleaning.",
  },
  {
    title: "Driveway Sinkage Lifting",
    description:
      "Sunken or uneven sections of a driveway can affect its appearance, drainage and usability. Our driveway sinkage lifting service focuses on raising and levelling suitable areas where paving has settled or become uneven. We assess the affected sections to determine whether lifting and reinstatement are appropriate, helping restore a more even surface and reduce potential trip hazards.",
  },
  {
    title: "Patio Repointing",
    description:
      "Over time, joints between patio slabs, bricks and paving stones can deteriorate, crack or become loose. Our patio repointing service involves removing damaged jointing material and replacing it with a suitable finish where required. Repointing can improve the appearance of an established patio and help maintain the condition of its paved surface.",
  },
  {
    title: "Graffiti Removal",
    description:
      "Unwanted graffiti can affect the appearance of commercial buildings, walls, shutters and other exterior surfaces. ELA Pressure Washing provides specialist graffiti removal using cleaning methods selected for the surface and type of marking. Whether dealing with painted masonry or other suitable exterior materials, our aim is to remove unwanted markings while taking account of the underlying surface.",
  },
  {
    title: "Chewing Gum Removal",
    description:
      "Discarded chewing gum can leave stubborn marks on pavements, entrances and other regularly used outdoor areas. Our professional chewing gum removal service is suited to commercial premises, pedestrian areas, paved walkways and other suitable hard surfaces. Using specialist cleaning equipment and appropriate techniques, we help restore a cleaner, more welcoming appearance to high-footfall areas.",
  },
  {
    title: "Heritage Brickwork Care",
    description:
      "Historic and heritage brickwork requires careful consideration before cleaning. Our heritage brickwork care service focuses on selecting cleaning techniques appropriate for older masonry, taking account of the surface's condition and sensitivity. We use specialist equipment and measured cleaning approaches to address accumulated dirt and staining while prioritising the preservation of the original material.",
    href: "https://historicengland.org.uk/advice/technical-advice/buildings/",
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
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Pressure Washing & Exterior Cleaning Services
        </h1>

        <div className="relative">
          <p className="mt-4 font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-8">
            ELA Pressure Washing provides professional exterior cleaning and
            maintenance services in Wolverhampton and the West Midlands. From
            pressure washing and steam cleaning to soft washing, roof cleaning
            and sealing, we help residential and commercial customers restore
            and maintain their outdoor surfaces.
          </p>

          <p className="font-normal w-[87.2%] text-base text-neutral-300 max-w-lg text-center mx-auto mb-14">
            <strong>Scroll down and explore our services below!</strong>
          </p>

          <div className="scroll-downs" role="img" aria-label="Scroll down">
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
    <>
      <SpotlightPreview />

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item) => (
            <div key={item.title} className="mb-10">
              <div className="text-sm prose prose-sm dark:prose-invert">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Exterior cleaning services provided by ELA Pressure Washing"
                    height={1000}
                    width={1000}
                    className="rounded-lg mb-10 object-cover"
                  />
                )}

                <h2 className="mb-4 text-2xl md:text-4xl">{item.title}</h2>

                <p className={`text-base ${item.href ? "mb-4" : ""}`}>
                  {item.description}
                </p>

                {item.pageLinks && (
                  <div className="mt-4 flex flex-col items-start gap-3">
                    {item.pageLinks.map((pageLink) => (
                      <Link
                        key={pageLink.href}
                        href={pageLink.href}
                        className="inline-flex font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
                      >
                        {pageLink.text}
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                )}

                {item.href && (
                  <p>
                    Learn more about the conservation and care of historic
                    buildings in the{" "}
                    <Link href={item.href} className="underline">
                      <strong>Historic England technical guidance</strong>
                    </Link>
                    .
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>

      <CTAWithDashedGridLines />
    </>
  );
}
