import React from "react";

export default (props) => {
  const bodyRef = React.createRef();
  const createPdf = () => {
    props.createPdf(bodyRef.current);
  };
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <button
          className="btn btn-dark btn-circle float-right ml-2 "
          data-toggle="tooltip"
          data-placement="top"
          title="Print Resume"
          onClick={createPdf}
        >
          <i class="fas fa-print fa-2x"></i>
        </button>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  );
};
