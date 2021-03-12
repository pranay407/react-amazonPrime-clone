import React from "react";
import Header from "../Header/Header";
import "./notfound.scss";

function NotFound() {
  return (
    <div className="error">
      <div>
        <Header />
      </div>
      <div className="error-msg">
        <span>400</span>
        <h2>Page Not Found!!!</h2>
      </div>
    </div>
  );
}

export default NotFound;
