import React, { useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Footer from "./Footer";
import PdfGen from "./pdfGen";
export default function App() {
  const [userdetails, setdetails] = useState([]);
  const [showResumePage, setResumePage] = useState(false);
  function addDetail(data) {
    setdetails((prevData) => {
      return [...prevData, data];
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
        <div>
          {userdetails.map((details, index) => {
            return (
              <PdfGen
                key={index}
                id={index}
                backPage={pdfPageBack}
                details={details}
              />
            );
          })}
        </div>
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
