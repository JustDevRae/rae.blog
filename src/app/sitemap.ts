import type { MetadataRoute } from "next";
import { getAllPostData } from "@/lib/parseMdx";
import { baseURL } from "@/constants/path";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostData().map((post) => ({
    url: `${baseURL}/post/${post.slug}`,
    lastModified: new Date(post.mdxMetaData.date),
  }));

  const routes: MetadataRoute.Sitemap = ["/", "/about", "/post"].map(
    (route) => ({
      url: `${baseURL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes, ...posts];
}
