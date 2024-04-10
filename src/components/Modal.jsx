import React from "react";
import styles from "./modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Modal({ work, onClose }) {
  const handleCloseModal = (e) => {
    // Vérifie si l'événement de clic provient de la zone de contenu de la modale
    if (e.target.classList.contains(styles.modal)) {
      onClose(); // Ferme la modale
    }
  };

  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.modal__content}>
        <button className={styles.modal__closeButton} onClick={onClose}>
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#00224e" }}
            size="xl"
          />
        </button>
        <h3 className={styles.modal__title}>{work.title}</h3>
        <p className={styles.modal__description}>{work.description}</p>
        <div className={styles.modal__pictures}>
          <img src={work.pictures[0]} alt="capture d'écran numéro 1" />
          <img src={work.pictures[1]} alt="capture d'écran numéro 2" />
          <img src={work.pictures[2]} alt="capture d'écran numéro 3" />
        </div>
        <div className={styles.modal__link}>
          <a href={work.link} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#00224E" }}
              size="2x"
            />
          </a>
        </div>
        <div className={styles.modal__decoration}></div>
      </div>
    </div>
  );
}

export default Modal;
