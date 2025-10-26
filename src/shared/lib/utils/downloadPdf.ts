import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
    const canvas = await html2canvas(element, {
      scale: 2, // 해상도를 높여 이미지가 선명하게 나오도록 설정
      useCORS: true, // 외부 이미지가 포함된 경우 필요
    });

    const imageData = canvas.toDataURL("image/png");

    // NOTE: 생성자 이름은 대문자로 시작해야 하지만, jsPDF 라이브러리는 아래와 같이 소문자로 시작하기 때문에 해당 라인에 대해서는 lint를 비활성화한다
    // eslint-disable-next-line new-cap
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

    // NOTE: 내용이 한 페이지를 넘어갈 경우, 새 페이지를 추가하고 이미지를 잘라 넣는다
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
    // TODO: 에러 핸들링 추가 예정
    // eslint-disable-next-line no-console
    console.error("PDF 생성 중 오류가 발생했습니다:", error);
  }
};
