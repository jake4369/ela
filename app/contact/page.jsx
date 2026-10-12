import { SimpleCenteredContactForm } from "@/components/ui/contact-form";

const pageTitle = "Contact ELA Pressure Washing | Wolverhampton";

const pageDescription =
  "Contact ELA Pressure Washing for a free quote on pressure washing, steam cleaning, roof cleaning and exterior cleaning services in Wolverhampton and the West Midlands.";

export const metadata = {
  title: {
    absolute: pageTitle,
  },

  description: pageDescription,

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    siteName: "ELA Pressure Washing",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing and Steam Cleaning",
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

export default function ContactPage() {
  return <SimpleCenteredContactForm />;
}
