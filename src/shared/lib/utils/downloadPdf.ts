import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DownloadPdfProps {
  /**
   * PDF로 변환할 HTML 요소
   */
  element: HTMLElement;
  /**
   * 다운로드될 PDF 파일 이름
   */
  fileName: string;
}

/**
 * 특정 HTML 요소를 PDF 파일로 변환하여 다운로드하는 함수
 * @param {DownloadPdfProps} props - element: PDF로 변환할 HTML 요소, fileName: 다운로드될 PDF 파일 이름
 */
export const downloadPdf = async ({ element, fileName }: DownloadPdfProps) => {
  if (!element) {
    console.error("PDF를 생성할 요소를 찾을 수 없습니다.");
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2, // 해상도를 높여 이미지가 선명하게 나오도록 설정
      useCORS: true, // 외부 이미지가 포함된 경우 필요
    });

    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const ratio = canvasWidth / canvasHeight;
    const pdfImageWidth = pageWidth;
    const pdfImageHeight = pdfImageWidth / ratio;

    let heightLeft = pdfImageHeight;
    let position = 0;

    pdf.addImage(imageData, "PNG", 0, position, pdfImageWidth, pdfImageHeight);
    heightLeft -= pageHeight;

    // 내용이 한 페이지를 넘어갈 경우, 새 페이지를 추가하고 이미지를 잘라 넣습니다.
    while (heightLeft > 0) {
      position = heightLeft - pdfImageHeight;
      pdf.addPage();
      pdf.addImage(
        imageData,
        "PNG",
        0,
        position,
        pdfImageWidth,
        pdfImageHeight,
      );
      heightLeft -= pageHeight;
    }

    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error("PDF 생성 중 오류가 발생했습니다:", error);
  }
};
