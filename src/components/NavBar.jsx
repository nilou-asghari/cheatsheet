import React from "react";

import Styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={Styles.nav}>
      <span className={Styles.logo}>
        <img src="copy.svg" alt="copy" />
      </span>
      <div className={Styles.content}>The Ultimate CheatSheet For You</div>
    </nav>
  );
}
