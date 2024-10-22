import "./globals.css";
import { NavbarWithChildren } from "@/components/ui/nav";
import { CenteredWithLogo } from "@/components/ui/footer";

export const metadata = {
  title: "ELA Pressure Washing",
  description:
    "ELA Pressure Washing offers professional pressure washing, steam cleaning, and surface restoration for residential, commercial, and heritage properties. Eco-friendly solutions.",
  keywords:
    "pressure washing, steam cleaning, heritage site cleaning, high pressure wash, soft wash, chemical treatments, sealing, roof cleaning, biocide treatments, driveway lifting, patio re-pointing, graffiti removal, chewing gum removal, residential, commercial,",
  author: "ELA Pressure Washing",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elapressurewashing.co.uk"
        />
        <meta property="og:image" content="/assets/opengraph.png" />
        <meta property="og:site_name" content="ELA Pressure Washing" />
        <meta name="twitter:image" content="/assets/opengraph.png" />

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
