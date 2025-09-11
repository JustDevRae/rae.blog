import { TOCSection } from "../model/type";

export const parseToc = (source: string) => {
  return source
    .split("\n")
    .filter((line) => line.match(/(^#{1,3})\s/))
    .reduce<TOCSection[]>((ac, markdownHeadingText) => {
      const newAccumulator = [...ac];
      const pureHeadingText = markdownHeadingText
        .replace(/^##*\s/, "")
        .replace(/[*,~]{2,}/g, "")
        .replace(/(?<=\])\((.*?)\)/g, "")
        .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, "");

      const section = {
        slug: pureHeadingText
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, "")
          .replace(/\s/g, "-"),
        text: pureHeadingText,
      };

      const isSubTitle = markdownHeadingText.split("#").length - 1 === 3;

      if (ac.length && isSubTitle) {
        newAccumulator.at(-1)?.subSections.push(section);
      } else {
        newAccumulator.push({ ...section, subSections: [] });
      }

      return newAccumulator;
    }, []);
};
