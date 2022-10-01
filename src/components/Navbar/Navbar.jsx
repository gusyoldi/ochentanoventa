import React from "react";
import Styles from "./Navbar.module.css";
import LOGO from "../../assets/images/logo/ochentaNoventaLogo.png";

export default function Navbar() {
  return (
    <div className={Styles.container}>
      
        <h1>
          <a href="#home">
            <img src={LOGO} alt="logo" />
          </a>
        </h1>
      
    </div>
  );
}
