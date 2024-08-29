import styles from "./Carousel.module.scss";
import works from "../datas/datas.json";
import { Link } from "react-router-dom";

function Carousel() {
  const cards = works.map((work) => (
    <div className={styles.card} key={work.id}>
      <Link to={`/work/${work.id}`}>
        <img src={work.cover} alt="" />
        <div className={styles.card__overlay}>
          <a href="" className={styles.card__link}>
            <span className={styles.card__titles}>
              <h3>Kasa</h3>
              <p>Site d'annonces immobilières</p>
            </span>
          </a>
        </div>
      </Link>
    </div>
  ));

  return <>{cards}</>;
}

export default Carousel;
