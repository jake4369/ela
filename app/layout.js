import "./globals.css";
import { NavbarWithChildren } from "@/components/ui/nav";
import { CenteredWithLogo } from "@/components/ui/footer";

export const metadata = {
  title: "ELA Pressure Washing",
  description:
    "ELA Pressure Washing provides top-quality pressure washing, steam cleaning, and surface restoration services for residential, commercial, and heritage properties. Our expert team specializes in high-pressure washing, soft washing, chemical treatments, roof cleaning, and more, ensuring your property looks its best and stays protected. Whether you need graffiti removal, driveway leveling, or patio re-pointing, we deliver outstanding results with eco-friendly solutions and professional care.",
  keywords:
    "pressure washing, steam cleaning, heritage site cleaning, high pressure wash, soft wash, chemical treatments, sealing, roof cleaning, biocide treatments, driveway lifting, patio re-pointing, graffiti removal, chewing gum removal, residential, commercial,",
  author: "ELA Pressure Washing",
  robots: "index, follow",
  // viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        {/* <meta name="viewport" content={metadata.viewport} /> */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elapressurewashing.co.uk"
        />
        <meta property="og:image" content="/assets/opengraph.png" />
        <meta property="og:site_name" content="ELA Pressure Washing" />

        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className="dark">
        <NavbarWithChildren></NavbarWithChildren>
        <main className="app">{children}</main>
        <CenteredWithLogo />
      </body>
    </html>
  );
}
