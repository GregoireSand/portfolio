import React from "react";
import styles from "./Landing.module.scss";

function Landing() {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landing__title}>
        Créons ensemble <br /> des expériences web captivantes
      </h1>
      <div className={styles.landing__buttons}>
        <button className={styles.landing__buttonFull}>
          <span className={styles.landing__works}>Mes réalisations</span>
        </button>
        <button className={styles.landing__buttonEmpty}>
          <span className={styles.landing__resume}>Télécharger mon CV</span>
        </button>
      </div>
    </section>
  );
}

export default Landing;
