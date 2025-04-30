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
