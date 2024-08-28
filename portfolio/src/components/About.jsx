import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <h5 className={styles.about__tag}>about</h5>
        <h3>Le titre ici</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ratione
          laboriosam sed, expedita est nisi, earum ipsam velit ab sapiente iusto
          autem, beatae cumque laborum asperiores debitis necessitatibus!
          Explicabo, rerum.
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
