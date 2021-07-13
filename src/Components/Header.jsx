import React from "react";

export default function HeaderNav(props) {
  function SignOut() {
    props.authenticate(false);
  }
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Resume Gen App</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark">Home</a>
          <a className="p-2 text-dark">About</a>
          <a className="p-2 text-dark">Contact</a>
        </nav>
        {props.loginState && (
          <button className="btn btn-outline-primary" onClick={SignOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}
