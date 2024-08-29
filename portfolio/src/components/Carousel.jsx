import styles from "./Carousel.module.scss";
import works from "../datas/datas.json";

function Carousel() {

  const cards = works.map((work) => (
    <div className={styles.carousel} key={work.id}>
      <ul>
        <li>
          <a href="" className={styles.carousel__link}>
            <article className={styles.card__titles}>
              <h3>Kasa</h3>
              <p>Site d'annonces immobilières</p>
            </article>
          </a>
        </li>
      </ul>
    </div>
  ));

  return <>{cards}</>;
}

export default Carousel;
