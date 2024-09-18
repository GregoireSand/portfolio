import { useState } from 'react';
import styles from "./Carousel.module.scss";
import works from "../datas/datas.json";
import Modal from "./BasicModal";

function Carousel() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleOpenModal = (work) => {
    setSelectedWork(work);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedWork(null);
  };

  const cards = works.map((work) => (
    <div className={styles.card} key={work.id}>
      <img src={work.cover} alt={work.title} />
      <div className={styles.card__overlay}>
        <div 
          className={styles.card__link} 
          onClick={() => handleOpenModal(work)}
        >
          <span className={styles.card__titles}>
            <h3>{work.title}</h3>
            <p>{work.subtitle}</p>
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {cards}
      <Modal 
        open={openModal} 
        handleClose={handleCloseModal}
        work={selectedWork}
      />
    </>
  );
}

export default Carousel;