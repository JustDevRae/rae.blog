import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDX_DIRECTORY } from "@/constants/path";

export const getMdxFileDataBySlug = (slug: string) => {
  const mdxFilePath = path.join(MDX_DIRECTORY, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf-8");
  const { content: mdxContent, data: mdxMetaData } = matter(mdxFileContents);
  return { mdxContent, mdxMetaData };
};

export const getAllMdxMetadataAndSlug = () => {
  const mdxFiles = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  return mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { mdxMetaData } = getMdxFileDataBySlug(slug);
    return { mdxMetaData, slug };
  });
};

export const getHeadingsForTOC = (slug: string) => {
  const mdxFilePath = path.join(MDX_DIRECTORY, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf-8");
  const { content: mdxContent } = matter(mdxFileContents);

  const lines = mdxContent.split("\n");
  const headings = lines
    .filter((line) => line.match(/^###*\s/))
    .map((raw) => {
      const level = raw.startsWith("###") ? 3 : 2;
      const text = raw.replace(/^###*\s/, "");
      return { level, text };
    });

  return { headings };
};
