const baseUrl = "https://www.elapressurewashing.co.uk";

export default function sitemap() {
  const routes = [
    "",
    "/services",
    "/services/driveway-cleaning",
    "/services/patio-cleaning",
    "/gallery",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
