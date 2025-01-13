import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDX_DIRECTORY } from "@/constants/path";

export type TOCSection = TOCSubSection & {
  subSections: TOCSubSection[];
};

export type TOCSubSection = {
  slug: string;
  text: string;
};

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

  return mdxContent
    .split("\n")
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TOCSection[]>((ac, rawHeading) => {
      const nac = [...ac];
      const removeMdx = rawHeading
        .replace(/^##*\s/, "")
        .replace(/[*,~]{2,}/g, "")
        .replace(/(?<=\])\((.*?)\)/g, "")
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, "");

      const section = {
        slug: removeMdx
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, "")
          .replace(/\s/g, "-"),
        text: removeMdx,
      };

      const isSubTitle = rawHeading.split("#").length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.subSections.push(section);
      } else {
        nac.push({ ...section, subSections: [] });
      }

      return nac;
    }, []);
};
