import React, { useRef } from "react";
import { ResumeData } from "./resumeGen";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Resume = (props) => {
  const componentRef = useRef();
  function printDocument() {
    const input = document.getElementById("resumePrintPage");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10, 190, 200);
      pdf.save("download.pdf");
    });
  }
  return (
    <div>
      <div>
        <button
          className="btn btn-dark btn-circle float-right ml-2 "
          data-toggle="tooltip"
          data-placement="top"
          title="Print Resume"
          onClick={printDocument}
        >
          <i class="fas fa-print fa-2x"></i>
        </button>
      </div>
      <ResumeData id="ResumeData" details={props.details} ref={componentRef} />
    </div>
  );
};

export default function PdfGen(props) {
  return (
    <div>
      <div id="backbtn">
        <button
          className="btn btn-dark btn-circle  float-right ml-3 mr-5"
          onClick={props.backPage}
          data-toggle="tooltip"
          data-placement="top"
          title="Back"
        >
          <i class="fas fa-long-arrow-alt-left fa-3x mr-2"></i>
        </button>
      </div>
      <Resume details={props.details} />
    </div>
  );
}
