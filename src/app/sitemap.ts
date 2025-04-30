import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/parseMdx";
import { baseURL } from "@/constants/path";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMeta().map((post) => ({
    url: `${baseURL}/post/${post.slug}`,
    lastModified: new Date(post.postMetaData.date),
  }));

  const routes: MetadataRoute.Sitemap = ["/", "/about", "/post"].map(
    (route) => ({
      url: `${baseURL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...posts];
}
