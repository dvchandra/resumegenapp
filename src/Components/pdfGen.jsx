import React, { useRef } from "react";
import { ResumeData } from "./resumeGen";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Doc from "./document";
import PdfContainer from "./pdfContainer";
function createPdf(html) {
  Doc.createPdf(html);
}
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
      <PdfContainer createPdf={createPdf}>
        <React.Fragment>
          <ResumeData id="ResumeData" details={props.details} />
        </React.Fragment>
      </PdfContainer>
    </div>
  );
}
