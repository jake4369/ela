import "./globals.css";
import { NavbarWithChildren } from "@/components/ui/nav";
import { CenteredWithLogo } from "@/components/ui/footer";

export const metadata = {
  title: "ELA Pressure Washing",
  description:
    "Professional pressure washing for residential and commercial premises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <NavbarWithChildren></NavbarWithChildren>
        <main className="app">{children}</main>
        <CenteredWithLogo />
      </body>
    </html>
  );
}
