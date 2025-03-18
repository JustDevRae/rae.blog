import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDX_DIRECTORY } from "@/constants/path";

export const getPostDetailData = (slug: string) => {
  const mdxFilePath = path.join(MDX_DIRECTORY, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf-8");
  const { content: mdxContent, data: mdxMetaData } = matter(mdxFileContents);
  return { mdxContent, mdxMetaData };
};

export const getAllPostData = () => {
  const mdxFiles = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  return mdxFiles
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { mdxMetaData } = getPostDetailData(slug);
      return { mdxMetaData, slug };
    })
    .sort(
      (a, b) =>
        new Date(b.mdxMetaData.date).getTime() -
        new Date(a.mdxMetaData.date).getTime(),
    );
};

export const getPaginatedPostData = (page: number, itemsPerPage: number) => {
  const mdxFiles = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  const allPosts = mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { mdxMetaData } = getPostDetailData(slug);
    return { slug, mdxMetaData };
  });

  allPosts.sort(
    (a, b) =>
      new Date(b.mdxMetaData.date).getTime() -
      new Date(a.mdxMetaData.date).getTime(),
  );

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedPosts = allPosts.slice(startIndex, startIndex + itemsPerPage);

  return {
    posts: paginatedPosts,
    totalPages: Math.ceil(allPosts.length / itemsPerPage),
  };
};

export const parseToc = (source: string) => {
  return source
    .split("\n")
    .filter((line) => line.match(/^##\s/))
    .map((rawHeading) => {
      const removeMdx = rawHeading
        .replace(/^##\s/, "")
        .replace(/[*,~]{2,}/g, "")
        .replace(/(?<=\])\((.*?)\)/g, "")
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, "");

      return {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, "")
          .replace(/\s/g, "-"),
        text: removeMdx,
      };
    });
};
