import styles from "./Landing.module.scss";

function Landing() {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landing__title}>
        Créons ensemble <br /> des expériences web captivantes
      </h1>
      <div className={styles.landing__buttons}>
        <button className={styles.landing__buttonFull}>Mes réalisations</button>
        <button className={styles.landing__buttonEmpty}>
          Télécharger mon CV
        </button>
      </div>
    </section>
  );
}

export default Landing;
