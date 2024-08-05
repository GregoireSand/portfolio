import styles from "./Landing.module.scss";

function Landing() {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landing__title}>Bienvenue sur mon portfolio</h1>
      <div className={styles.landing__buttons}>
        <button>Me contacter</button>
        <button>Télécharger mon CV</button>
      </div>
    </section>
  );
}

export default Landing;
