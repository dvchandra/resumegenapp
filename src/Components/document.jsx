import { savePDF } from "@progress/kendo-react-pdf";

class DocService {
  createPdf = (html) => {
    savePDF(html, {
      paperSize: "A4",
      fileName: "resume.pdf",
      margin: "0.3mm",
      scale: 0.45,
      landscape: false,
      creator: "Devender Chandra"
    });
  };
}

const Doc = new DocService();
export default Doc;
