import Image from "next/image";
import Link from "next/link";

const pageTitle = "Patio Cleaning in Wolverhampton | ELA Pressure Washing";

const pageDescription =
  "Professional patio cleaning in Wolverhampton and the West Midlands. Remove dirt, moss and algae from suitable paved surfaces. Contact ELA for a quote.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/services/patio-cleaning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/services/patio-cleaning",
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

const patioSurfaces = [
  {
    title: "Natural Stone Patios",
    description:
      "Natural stone paving, including sandstone and limestone, can require a carefully selected cleaning method. We consider the condition and characteristics of the stone before deciding which cleaning techniques and treatments are appropriate.",
  },
  {
    title: "Concrete Patio Slabs",
    description:
      "Concrete paving slabs can accumulate dirt, algae, moss and other deposits over time. Professional cleaning can help improve their appearance, using equipment and pressure settings appropriate for the surface.",
  },
  {
    title: "Block Paving & Garden Paths",
    description:
      "Block-paved patios, walkways and garden paths often collect organic growth around their edges and joints. Suitable cleaning can help remove this buildup, with additional joint maintenance considered where necessary.",
  },
];

const cleaningSteps = [
  {
    number: "01",
    title: "Inspect the patio",
    description:
      "We consider the paving material, condition, jointing and type of contamination before recommending an appropriate cleaning approach.",
  },
  {
    number: "02",
    title: "Clean the paving",
    description:
      "Using suitable professional equipment and cleaning techniques, we work to remove accumulated dirt, organic growth and surface grime.",
  },
  {
    number: "03",
    title: "Discuss aftercare",
    description:
      "Depending on the condition of the patio, additional treatments, repointing or sealing may be worth considering to help maintain the finished surface.",
  },
];

const faqs = [
  {
    question: "Can you clean natural stone patios?",
    answer:
      "Natural stone patios can often be cleaned professionally, but the appropriate method depends on the type of stone, its condition and any existing treatments. Some materials require gentler techniques than others.",
  },
  {
    question: "Can patio cleaning remove moss and algae?",
    answer:
      "Professional patio cleaning can help remove moss, algae and accumulated surface grime. Specialist treatments may also be suitable for addressing remaining organic growth, depending on the paving material.",
  },
  {
    question: "Can you remove black spots from patio slabs?",
    answer:
      "Some black spots are caused by lichen and other stubborn contamination. Specialist cleaning treatments may help, but results depend on the paving material and how deeply the contamination has become established.",
  },
  {
    question: "Can pressure washing damage a patio?",
    answer:
      "Excessive pressure or unsuitable cleaning techniques can damage some paving materials and joints. We consider the surface type and condition before selecting a cleaning method.",
  },
  {
    question: "Do you offer patio repointing?",
    answer:
      "Yes. ELA Pressure Washing also offers patio repointing services for suitable paved areas where jointing material has deteriorated. This can be discussed alongside the cleaning work.",
  },
  {
    question: "Can my patio be sealed after cleaning?",
    answer:
      "Sealing may be suitable for certain patio surfaces after cleaning, depending on the material, its condition and the finish required. We can discuss available options and whether sealing would be appropriate.",
  },
  {
    question: "How much does patio cleaning cost?",
    answer:
      "The cost depends on the size of your patio, the paving material, its condition, accessibility and whether additional treatments are needed. Contact ELA Pressure Washing with details of the work for a quotation.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "ELA Pressure Washing provides exterior cleaning services in Wolverhampton and across the West Midlands. Contact us with your location to discuss your patio cleaning requirements.",
  },
];

export default function PatioCleaningPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <Image
          src="/assets/images/about/header.jpg"
          alt="Exterior cleaning work by ELA Pressure Washing"
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
                Patio Cleaning
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Professional Patio & Paving Cleaning
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Professional Patio Cleaning in Wolverhampton
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Restore the appearance of your outdoor living space with
              professional patio cleaning from ELA Pressure Washing. We help
              customers across Wolverhampton and the West Midlands tackle
              built-up dirt, moss, algae and stubborn grime on suitable paved
              surfaces.
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
              Patio & Paving Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Bring your outdoor space back to life
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              Patios are exposed to the elements throughout the year. Rain, damp
              conditions, falling leaves and everyday use can contribute to
              discolouration and the buildup of moss, algae and other deposits.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Professional patio cleaning can improve the appearance of your
              paving and help remove accumulated surface contamination. Whether
              you're preparing your garden for the warmer months or maintaining
              an outdoor seating area, ELA can assess a suitable cleaning
              approach for your property.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {patioSurfaces.map((surface) => (
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
              Specialist Exterior Cleaning
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The right cleaning method for your patio
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Different paving materials require different cleaning methods. A
              technique suitable for concrete slabs may not be appropriate for
              delicate natural stone or older paving.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              ELA Pressure Washing provides professional pressure washing, soft
              washing and specialist exterior cleaning treatments. We assess the
              paving material, condition and contamination before recommending a
              suitable approach.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              We can also discuss the removal of stubborn organic growth and
              additional maintenance work where appropriate.
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
              src="/assets/images/about/drive.jpg"
              alt="Example of exterior paved surface cleaning work"
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
              Our Cleaning Process
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What to expect from professional patio cleaning
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Every patio is different. The paving material, condition of the
              joints and amount of organic growth all influence how the cleaning
              work should be approached.
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

      <section className="bg-slate-100 py-20 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
                Patio Maintenance
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Patio Repointing & Sealing
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                Cleaning is often an important part of maintaining a patio, but
                some areas may also benefit from additional attention.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Over time, the jointing between paving slabs can deteriorate or
                become loose. ELA also provides patio repointing services for
                suitable surfaces, helping restore worn or damaged joints.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Surface sealing may also be an option after cleaning. Depending
                on the paving material and product used, sealing can help
                protect against moisture and staining and make ongoing
                maintenance easier.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <h3 className="text-2xl font-bold">Looking after your patio</h3>

              <p className="mt-5 leading-8 text-slate-200">
                Whether your patio needs a thorough clean, attention to its
                joints or advice on suitable protective treatments, we can
                discuss the options for your surface.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss Your Patio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Patio Cleaning Across Wolverhampton and the West Midlands
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              ELA Pressure Washing provides exterior cleaning services for homes
              and businesses throughout Wolverhampton and the wider West
              Midlands. Contact us with your location, paving material and the
              type of cleaning you require.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a Patio Cleaning Quote
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
              Patio Cleaning FAQs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
              Answers to common questions about patio cleaning, paving
              materials, treatments and maintenance.
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
            Ready to refresh your patio?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Contact ELA Pressure Washing to discuss your patio cleaning
            requirements and request a quotation for your property.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-slate-950 px-7 py-3 font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
          >
            Request Your Patio Cleaning Quote
          </Link>

          <p className="mt-6 text-sm text-slate-600">
            Need your driveway cleaned too?{" "}
            <Link
              href="/services/driveway-cleaning"
              className="font-semibold underline underline-offset-4"
            >
              Explore our driveway cleaning service
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
