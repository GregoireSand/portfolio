import React, { useState, useEffect } from "react";
import styles from "./cardList.module.scss";
import works from "../datas/datas.json";
import Modal from "./Modal";

function CardList() {
  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
    //document.body.style.overflow = "hidden"; // Empêche le scroll
  };

  const closeModal = () => {
    setSelectedWork(null);
    //document.body.style.overflow = "auto"; // Rétablit le scroll
  };

  useEffect(() => {
    // Nettoie l'effet lorsque le composant est démonté
    return () => {
      //document.body.style.overflow = "auto"; // Rétablit le scroll
    };
  }, []);

  const cards = works.map((work) => (
    <div className={styles.card} key={work.id} onClick={() => openModal(work)}>
      <img className={styles.card__image} src={work.cover} alt={work.title} />
      <div className={styles.card__overlay}></div>
      <p className={styles.card__text}>{work.title}</p>
    </div>
  ));

  return (
    <>
      {cards}
      {selectedWork && (
        <div className={styles.overlay}>
          <Modal work={selectedWork} onClose={closeModal} />
        </div>
      )}
    </>
  );
}

export default CardList;
