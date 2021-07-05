import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ResumeData } from "./resumeGen";

const Resume = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div>
      <ResumeData details={props.details} ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default function PdfGen(props) {
  return (
    <div>
      <button onClick={props.backPage}>Back</button>
      <Resume details={props.details} />
    </div>
  );
}
