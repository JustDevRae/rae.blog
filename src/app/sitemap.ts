import type { MetadataRoute } from "next";
import { getAllPostData } from "@/lib/parseMdx";

const baseURL = "https://rae-blog.vercel.app";

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
