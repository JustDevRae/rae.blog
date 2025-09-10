import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/entities/post";
import { BASE_URL } from "@/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMeta().map((post) => ({
    url: `${BASE_URL}/post/${post.slug}`,
    lastModified: new Date(post.postMetaData.date),
  }));

  const routes: MetadataRoute.Sitemap = ["/", "/about", "/post"].map(
    (route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...posts];
}
