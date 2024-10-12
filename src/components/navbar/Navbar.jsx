import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ScrollIndicator />
      <div className={styles.navContainer}>navbar</div>
    </nav>
  );
};

export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progress}
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default Navbar;
