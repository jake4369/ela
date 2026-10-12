const baseUrl = "https://www.elapressurewashing.co.uk";

export default function sitemap() {
  const routes = ["", "/services", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
