import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <h5 className={styles.about__tag}>à propos</h5>
        <h3>Le titre ici</h3>
        <p>
          Je suis Grégoire, développeur front-end passionné par la création de sites web modernes et accessibles. 
          Ma personnalité facile combinée à mes compétences techniques et mon enthousiasme, fait de moi un atout précieux pour tout projet web. Adaptable et curieux, j'évolue constamment dans ce domaine en perpétuel changement. 
        </p>
      </div>
      <div className={styles.about__picture}>
        <img
          className={styles.about__image}
          src="src/assets/about_picture.webp"
          alt="Me, admiring the Dolomites in Italy"
        />
      </div>
    </div>
  );
}

export default About;
