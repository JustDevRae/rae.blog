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
