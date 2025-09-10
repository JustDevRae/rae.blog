import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDX_DIRECTORY } from "@/shared/config";

type PostMetaData = {
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const parsePostDataBySlug = (slug: string) => {
  const mdxFilePath = path.join(MDX_DIRECTORY, `${slug}.mdx`);
  const mdxFileContents = fs.readFileSync(mdxFilePath, "utf-8");

  const { content: postContent, data } = matter(mdxFileContents);
  const postMetaData = data as PostMetaData;

  return { postContent, postMetaData };
};

export const extractSlugsFromMDXFiles = () => {
  const slugs = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  return slugs;
};

export const getAllPostMeta = () => {
  const slugs = extractSlugsFromMDXFiles();

  const postMetaAndSlug = slugs.map((slug) => {
    const { postMetaData } = parsePostDataBySlug(slug);
    return { postMetaData, slug };
  });

  const sortedPostMeta = postMetaAndSlug.sort(
    (a, b) =>
      new Date(b.postMetaData.date).getTime() -
      new Date(a.postMetaData.date).getTime(),
  );

  return sortedPostMeta;
};

export const extractUniqueTagsFromMDX = () => {
  const uniqueTags = new Set<string>();

  const allMDXFiles = fs
    .readdirSync(MDX_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"));

  allMDXFiles.forEach((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { postMetaData } = parsePostDataBySlug(slug);

    if (postMetaData.tags && Array.isArray(postMetaData.tags)) {
      postMetaData.tags.forEach((tag: string) => {
        uniqueTags.add(tag.trim());
      });
    }
  });

  return Array.from(uniqueTags);
};
