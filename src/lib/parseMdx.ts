import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDX_DIRECTORY } from "@/constants/path";

type MdxMetaData = {
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const getPostDetailData = (slug: string) => {
  const mdxFilePath = path.join(MDX_DIRECTORY, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf-8");
  const { content: mdxContent, data } = matter(mdxFileContents);

  const mdxMetaData = data as MdxMetaData;

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

export const getAllUniqueTags = () => {
  const mdxFiles = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  const allTags = new Set<string>();

  mdxFiles.forEach((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { mdxMetaData } = getPostDetailData(slug);

    if (mdxMetaData.tags && Array.isArray(mdxMetaData.tags)) {
      mdxMetaData.tags.forEach((tag: string) => {
        allTags.add(tag.trim());
      });
    }
  });

  return Array.from(allTags);
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
