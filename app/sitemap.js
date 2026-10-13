const baseUrl = "https://www.elapressurewashing.co.uk";

export default function sitemap() {
  const routes = [
    "",
    "/services",
    "/services/driveway-cleaning",
    "/services/patio-cleaning",
    "/services/roof-cleaning",
    "/services/commercial-pressure-washing",
    "/services/steam-cleaning",
    "/services/heritage-brickwork-cleaning",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
