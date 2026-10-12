import "./globals.css";

import { NavbarWithChildren } from "@/components/ui/nav";
import { CenteredWithLogo } from "@/components/ui/footer";
import MaintenancePage from "./maintenance/MaintenancePage";

const siteUrl = "https://www.elapressurewashing.co.uk";

const siteDescription =
  "ELA Pressure Washing provides professional pressure washing, steam cleaning and exterior surface restoration for residential, commercial and heritage properties in Wolverhampton and the West Midlands.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Pressure Washing & Exterior Cleaning in Wolverhampton | ELA",
    template: "%s | ELA Pressure Washing",
  },

  description: siteDescription,

  applicationName: "ELA Pressure Washing",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "ELA Pressure Washing",
    title: "Pressure Washing & Exterior Cleaning in Wolverhampton | ELA",
    description: siteDescription,
    images: [
      {
        url: "/assets/opengraph.png",
        alt: "ELA Pressure Washing And Steam Cleaning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ELA Pressure Washing | Exterior Cleaning in Wolverhampton",
    description: siteDescription,
    images: ["/assets/opengraph.png"],
  },

  icons: {
    icon: "/assets/favicon.ico",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,

  name: "ELA Pressure Washing And Steam Cleaning",

  description: siteDescription,

  url: siteUrl,

  image: `${siteUrl}/assets/opengraph.png`,

  telephone: "+447852435168",

  address: {
    "@type": "PostalAddress",
    streetAddress: "60 D'Eyncourt Road",
    addressLocality: "Wolverhampton",
    addressRegion: "West Midlands",
    postalCode: "WV10 0SX",
    addressCountry: "GB",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Wolverhampton",
    },
    {
      "@type": "AdministrativeArea",
      name: "West Midlands",
    },
  ],

  openingHours: "Mo-Fr 07:00-17:00",

  sameAs: [
    "https://www.facebook.com/profile.php?id=61555129179931",
    "https://www.instagram.com/ela.pressurewashing/",
    "https://www.youtube.com/@elapressurewashing5332",
    "https://www.tiktok.com/@ela_pressure_washing",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="dark">
        {/* <NavbarWithChildren />

        <main className="app">{children}</main>

        <CenteredWithLogo /> */}

        {/* MAINTENANCE PAGE */}
        <MaintenancePage />
      </body>
    </html>
  );
}
