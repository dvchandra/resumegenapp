import React, { useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";
import Footer from "./Footer";
export default function App() {
  const [details, setdetails] = useState([]);
  function addDetail(data) {
    setdetails((prevData) => {
      return [...prevData, data];
    });
  }
  return (
    <div className="App">
      <Header />
      <UserForm addUser={addDetail} />
      {/* {details.map((user) => {
        <li>user</li>;
      })} */}
      <Footer />
    </div>
  );
}
