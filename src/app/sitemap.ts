import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://oguzhanaygoren.com";

  const routes = [
    "",
    "/about",
    "/research",
    "/teaching",
    "/speaking",
    "/work",
    "/services",
    "/media",
    "/bookgate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
