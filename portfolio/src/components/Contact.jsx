import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IoRocketSharp } from "react-icons/io5";

function Contact() {
  return (
    <div className={styles.contact__container}>
      <div className={styles.contact__leftContainer}>
        <p className={styles.contact__leftContainerTag}>contact</p>
        <h3>Et si on travaillait ensemble ?</h3>
        <p className={styles.contact__leftContainerText}>
          Créons un web créatif, interactif et accessible !
        </p>
      </div>
      <div className={styles.contact__rightContainer}>
        <form action="/submit-form" method="post">
          <div>
            <label for="name">NOM</label>
            <br />
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="email">EMAIL</label>
            <br />
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="message">MESSAGE</label>
            <br />
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className={styles.contact__rightContainerBottom}>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9ba1b7" }} />
              sandrockgregoire@gmail.com
            </a>
            <button type="submit">
              Envoyer
              <IoRocketSharp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
