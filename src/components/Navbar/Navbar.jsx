import React from "react";
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={Styles.container}>
      <h1>
        OCHENTA<br/>
        NOVENTA
      </h1>
      <div>
        <a href="#about">About</a>
        <a href="#albums">Albums</a>
        <a href="#videos">Videos</a>
      </div>
    </div>
  );
}

