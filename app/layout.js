import "./globals.css";
import { SimpleNavbarWithHoverEffects } from "@/components/ui/nav";

export const metadata = {
  title: "ELA Pressure Washing",
  description:
    "Professional pressure washing for residential and commercial premises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <SimpleNavbarWithHoverEffects />
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
