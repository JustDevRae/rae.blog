import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/entities/post/api/mdx";
import { BASE_URL } from "@/shared/config/path";

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
