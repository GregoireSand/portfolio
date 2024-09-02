import styles from "./Header.module.scss";
import { useState, useEffect } from "react";
import classNames from "classnames";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(styles.header, { [styles.scrolled]: isScrolled })}
    >
      <div className={styles.header__links}>
        <a href="#about">A propos</a>
        <a href="#works">Réalisations</a>
      </div>
      <a href="#home">
        <div className={styles.header__names}>
          <p className={styles.header__firstName}>grégoire</p>
          <p className={styles.header__lastName}>sandrock</p>
        </div>
      </a>
      <a className={styles.header__contact} href="#contact">
        Contactez-moi
      </a>
    </div>
  );
}

export default Header;
