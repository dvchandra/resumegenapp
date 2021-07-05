import React, { useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Footer from "./Footer";
import PdfGen from "./pdfGen";
export default function App() {
  const [details, setdetails] = useState();
  const [showResumePage, setResumePage] = useState(false);
  function addDetail(data) {
    setdetails((prevData) => {
      return data;
    });
    setResumePage(true);
  }
  function pdfPageBack() {
    setResumePage(false);
    setdetails("");
  }
  return (
    <div className="App">
      {showResumePage ? (
        <PdfGen backPage={pdfPageBack} details={details} />
      ) : (
        <div>
          <Header />
          <UserForm addUser={addDetail} />
          <Footer />{" "}
        </div>
      )}
    </div>
  );
}
