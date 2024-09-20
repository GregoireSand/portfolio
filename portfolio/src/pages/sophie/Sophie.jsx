import styles from "../sophie/Sophie.module.scss";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FaArrowDown } from "react-icons/fa6";
import image from "../../assets/kasa_cover_desktop.png";
import image2 from "../../assets/kasa_accomodation_1.png";
import image3 from "../../assets/kasa_accomodation_2.png";
import image4 from "../../assets/kasa_about.png";
import image5 from "../../assets/kasa_error.png";
import { useRef } from "react";

function Sophie() {
  const picturesRef = useRef(null);

  const scrollToPictures = (e) => {
    e.preventDefault();
    picturesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.workContainer}>
      {/* Fond d'écran avec overlay */}
      <div className={styles.work__background}>
        <img src={image} alt="Background" />
        <div className={styles.work__background__overlay}></div>
      </div>

      <div className={styles.work}>
        <Header />
        <span className={styles.illegalSpan}></span>
        <Link to="/#works" className={styles.work__linkBackTop}>
          <GoArrowLeft className={styles.work__linkBackArrowTop} />
          <p>Retour aux projets</p>
        </Link>
        <h6 className={styles.work__date}>mars 2024</h6>
        <h2 className={styles.work__title}>Sophie Bluel</h2>
        <p className={styles.work__description}>
          Site fictif d'une photographe
        </p>
        <div className={styles.work__separation}></div>
        <button onClick={scrollToPictures} className={styles.work__button}>
          <FaArrowDown className={styles.work__buttonArrow} />
        </button>
        <br />
        <div ref={picturesRef} className={styles.work__pictures} id="pictures">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
        </div>
      </div>
      <div className={styles.work__linkBackArrowBottomContainer}>
        <Link to="/" className={styles.work__linkBackBottom}>
          <GoArrowLeft className={styles.work__linkBackArrowBottom} />
          <p>Retour aux projets</p>
        </Link>
      </div>
    </div>
  );
}

export default Sophie;
