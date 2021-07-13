import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeData } from "./resumeGen";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PrintIcon from "@material-ui/icons/Print";
const Resume = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
      <div>
        <button className="btn float-left ml-5 pdfGen" onClick={handlePrint}>
          <PrintIcon />
        </button>
      </div>
      <ResumeData details={props.details} ref={componentRef} />
    </div>
  );
};

export default function PdfGen(props) {
  return (
    <div>
      <div id="backbtn">
        <Button className="pdfGen" variant="outlined" onClick={props.backPage}>
          <KeyboardBackspaceIcon /> Back
        </Button>
      </div>
      <Resume details={props.details} />
    </div>
  );
}
