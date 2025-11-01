interface DownloadPdfProps {
  element: HTMLElement;
  fileName: string;
}

export const downloadPdf = async ({ element, fileName }: DownloadPdfProps) => {
  if (!element) {
    // TODO: 에러 핸들링 추가 예정
    // eslint-disable-next-line no-console
    console.error("PDF를 생성할 요소를 찾을 수 없습니다.");
    return;
  }

  try {
    const html2pdf = (await import("html2pdf.js")).default;

    await html2pdf()
      .set({
        margin: 10,
        filename: `${fileName}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      })
      .from(element)
      .save();
    window.location.replace("/about");
  } catch (error) {
    // TODO: 에러 핸들링 추가 예정
    // eslint-disable-next-line no-console
    console.error("PDF 생성 중 오류가 발생했습니다:", error);
  }
};
