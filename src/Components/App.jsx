import React, { useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Footer from "./Footer";
import PdfGen from "./pdfGen";
import Login from "./login";
export default function App() {
  const [userdetails, setdetails] = useState([]);
  const [showResumePage, setResumePage] = useState(false);
  const [authenFlag, setauthenFlag] = useState(false);
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
  function userAuthenticate(value) {
    setauthenFlag(value);
    setResumePage(false);
  }
  return (
    <div className="App">
      <Header loginState={authenFlag} authenticate={userAuthenticate} />
      <div className="pageContent">
        {authenFlag ? (
          <div>
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
                <UserForm addUser={addDetail} />
              </div>
            )}
          </div>
        ) : (
          <Login authenticate={userAuthenticate} />
        )}
      </div>
      <Footer />
    </div>
  );
}
