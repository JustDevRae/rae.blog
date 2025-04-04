// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getAllPostData } = require("./src/lib/parseMdx");

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://rae-blog.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async () => {
    const posts = getAllPostData();

    return posts.map(({ slug, mdxMetaData }) => ({
      loc: `/posts/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: mdxMetaData.date || new Date().toISOString(),
    }));
  },
};
