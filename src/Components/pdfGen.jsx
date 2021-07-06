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
      <div id="printbtn">
        <Button variant="contained" color="primary" onClick={handlePrint}>
          <PrintIcon />
        </Button>
      </div>
      <ResumeData details={props.details} ref={componentRef} />
    </div>
  );
};

export default function PdfGen(props) {
  return (
    <div id="pdfGen">
      <div id="backbtn">
        <Button variant="outlined" onClick={props.backPage}>
          <KeyboardBackspaceIcon /> Back
        </Button>
      </div>
      <Resume details={props.details} />
    </div>
  );
}
