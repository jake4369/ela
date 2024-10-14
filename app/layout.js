import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "ELA Pressure Washing",
  description:
    "Professional pressure washing for residential and commercial premises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
