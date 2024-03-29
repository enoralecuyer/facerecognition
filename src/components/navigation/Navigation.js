import React from "react";
import "./navigation.css";

const Navigation = () => {
  return (
    <nav className="dt w-100 border-box pa3 ph5-ns">
      <p className="f3 link dim pink pa3 pointer dib">Face Recognition</p>
      <div className="dtc v-mid w-75 tr toggle-container">
        <p className="f3 link dim pink pa3 pointer dib"><a href="http://www.enoralecuyer.com/">About</a></p>
      </div>
    </nav>
  );
};

export default Navigation;
