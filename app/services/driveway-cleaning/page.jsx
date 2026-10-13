import Image from "next/image";
import Link from "next/link";

const pageTitle = "Driveway Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional driveway cleaning in Wolverhampton and the West Midlands. Cleaning for block paving, concrete and suitable stone driveways. Request a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/driveway-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/driveway-cleaning",
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

const drivewaySurfaces = [
  {
    title: "Block Paving",
    description:
      "Block-paved driveways can accumulate dirt, algae and organic growth between the paving blocks. Cleaning can restore their appearance, although jointing sand may need attention afterwards.",
  },
  {
    title: "Concrete Driveways",
    description:
      "Concrete can collect tyre marks, dirt and other surface contamination over time. Professional pressure washing can help improve its appearance, using a method suited to the surface condition.",
  },
  {
    title: "Stone & Paved Surfaces",
    description:
      "Some natural stone and other paved driveways require particular care. We assess the material before deciding whether pressure washing or another cleaning method is suitable.",
  },
];

const cleaningSteps = [
  {
    number: "01",
    title: "Assess the driveway",
    description:
      "We consider the surface material, condition, size and type of contamination to determine a suitable cleaning approach.",
  },
  {
    number: "02",
    title: "Clean the surface",
    description:
      "Using appropriate professional equipment and techniques, we work to remove accumulated dirt, algae and grime from the driveway.",
  },
  {
    number: "03",
    title: "Consider additional treatments",
    description:
      "Where appropriate, we can discuss treatments, sealing or other maintenance work that may help maintain the cleaned surface.",
  },
];

const faqs = [
  {
    question: "Can you clean block-paved driveways?",
    answer:
      "Block paving is one of the outdoor surfaces that can benefit from professional cleaning. The cleaning method depends on the condition of the blocks and joints. Some driveways may also require replacement jointing sand after cleaning.",
  },
  {
    question: "Can pressure washing damage my driveway?",
    answer:
      "Using unsuitable pressure or equipment can damage certain surfaces. That's why the material and its condition should be assessed before cleaning. Not every driveway is suitable for the same pressure or treatment.",
  },
  {
    question: "Can you remove oil stains from a driveway?",
    answer:
      "Some oil stains and other stubborn marks may respond to specialist cleaning treatments, but results depend on the material, type of stain and how deeply it has penetrated. Complete stain removal cannot always be guaranteed.",
  },
  {
    question: "Do you offer driveway sealing?",
    answer:
      "ELA also provides surface sealing services. Depending on the material and its condition, sealing may be an appropriate additional treatment after cleaning. We can discuss suitable options when preparing a quotation.",
  },
  {
    question: "How much does driveway cleaning cost?",
    answer:
      "The cost depends on factors such as driveway size, surface type, condition, accessibility and any additional treatments requested. Contact ELA Pressure Washing with details of your driveway to request a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your location and the work required to check availability for your property.",
  },
];

export default function DrivewayCleaningPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src="/assets/images/about/drive.jpg"
          alt="Driveway exterior cleaning work by ELA Pressure Washing"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 md:pb-32 md:pt-36">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-slate-200">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Driveway Cleaning
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Residential & Commercial Exterior Cleaning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Professional Driveway Cleaning in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Bring new life to your driveway with professional exterior
              cleaning from ELA Pressure Washing. We help homeowners and
              businesses across Wolverhampton and the West Midlands tackle
              built-up dirt, algae, moss and stubborn surface grime.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Request a Quote
              </Link>

              <Link
                href="/gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Driveway Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Restore the appearance of your driveway
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              A driveway is one of the most frequently used parts of a property.
              Over time, traffic, weather and organic growth can leave paving
              looking tired and discoloured.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Our professional driveway cleaning service focuses on removing
              surface contamination using methods selected for the material
              being cleaned. Whether you're maintaining your home or improving
              the appearance of commercial premises, we can help assess the work
              required.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {drivewaySurfaces.map((surface) => (
              <article
                key={surface.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold">{surface.title}</h3>

                <p className="mt-4 leading-7 text-slate-700">
                  {surface.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Our Approach
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A cleaning method suited to your surface
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Different driveways require different approaches. The condition of
              the surface, its material and the type of contamination all
              influence how it should be cleaned.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              ELA Pressure Washing provides high-pressure washing, soft washing
              and specialist cleaning treatments for suitable exterior surfaces.
              We consider the work required before recommending an approach.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Where additional attention is needed, we can also discuss related
              services such as sealing and driveway sinkage lifting.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex font-semibold text-sky-800 underline underline-offset-4 hover:text-sky-950"
            >
              Explore all exterior cleaning services
            </Link>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[440px]">
            <Image
              src="/assets/images/about/drive2.jpg"
              alt="Example of exterior driveway cleaning work"
              fill
              quality={75}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              The Process
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What to expect from driveway cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Every property is different, but these are the key considerations
              when planning professional driveway cleaning.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cleaningSteps.map((step) => (
              <article key={step.number}>
                <span
                  aria-hidden="true"
                  className="text-4xl font-bold text-sky-700"
                >
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Driveway Cleaning Across Wolverhampton and the West Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              ELA Pressure Washing provides exterior cleaning for residential
              and commercial properties in Wolverhampton and the wider West
              Midlands. Tell us where your property is located, the type of
              driveway you have and the cleaning you require.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact ELA Pressure Washing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Driveway Cleaning FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Answers to common questions about driveway cleaning, suitable
              surfaces and requesting a quotation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50"
              >
                <summary className="cursor-pointer rounded-xl px-6 py-5 font-semibold marker:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
                  {faq.question}
                </summary>

                <p className="px-6 pb-6 leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to refresh your driveway?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss your driveway, the cleaning
            required and the options available for your property.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Your Driveway Cleaning Quote
          </Link>

          <p className="mt-6 text-sm text-slate-600">
            Looking for something else?{" "}
            <Link
              href="/services"
              className="font-semibold underline underline-offset-4"
            >
              View all our services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
