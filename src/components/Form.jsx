import React, { useState } from "react";
import styles from "./form.module.scss";
import { db } from "./Firebase";
import contactImage from "../assets/contact.png";

function Form() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        lastname: lastname,
        firstname: firstname,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert("Votre message a été envoyé avec succès 👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setLastname("");
    setFirstname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.contact__pictureContainer}>
        <img
          src={contactImage}
          alt="un bras tenant une lettre sort d'un téléphone"
        />
      </div>
      <div className={styles.contact__formContainer}>
        <form action="contact" method="post" onSubmit={handleSubmit}>
          <div className={styles.rowNames}>
            <div className={styles.formNames}>
              <label htmlFor="">Nom</label>
              <input
                className={styles.inputControl}
                type="text"
                placeholder="Nom"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>

            <div className={styles.formNames}>
              <label htmlFor="">Prénom</label>
              <input
                className={styles.inputControl}
                type="text"
                placeholder="Prénom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formNames}>
            <label>E-mail</label>
            <input
              className={styles.inputControlMail}
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formNames}>
            <label>Sujet</label>
            <input
              className={styles.inputControlMail}
              type="text"
              placeholder="Sujet"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className={styles.formNames}>
            <label>Votre message</label>
            <textarea
              className={styles.inputControlMessage}
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.formButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
