import styles from '../components/banner.module.scss'
import * as React from 'react';
import Button from '@mui/material/Button';
import CV from '../assets/CV.txt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import photo from "../assets/photo3.png"

function Banner() {
  
  return (
    <div className={styles.section__container} id='home'>
          <div className={styles.section__introduction}>
            <div className={styles.section__titleContainer}>
              <h1 className={styles.section__title}>
                Je suis Grégoire Sandrock, développeur web à Lyon.
              </h1>
              <p className={styles.section__description}>
                Je crée des expériences interactives, réactives et esthétiques, <br></br>optimisées pour une performance maximale sur tous les appareils.
              </p>
              <div className={styles.buttons}>
                <a href="#contact">
                <Button variant="contained" 
                  sx={{
                    backgroundColor:'#00224E',
                    width: { xs: 270, sm: 300, md: 350 }, // Largeur différente pour les écrans xs et md
                    height: 50,
                    fontFamily: 'Open Sans',
                    fontSize: 20,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#4376AB',
                    },
                    }}>Contactez-moi
                </Button>
                </a>
                <a href={CV} download="CV.pdf">
                <Button variant="outlined" 
                  sx={{
                    color:'#4376AB',
                    width: { xs: 270, sm: 300, md: 350 }, // Largeur différente pour les écrans xs et md
                    height: 50,
                    fontFamily: 'Open Sans',
                    fontSize: 20,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: '#00224E',
                      color:'#00224E'
                    }
                  }}>Téléchargez mon CV
                </Button>
                </a>
              </div>
            </div>
          
            <div className={styles.section__imageContainer}>
                  <img src={photo} alt="photo vue du dessous" />
            </div>
      </div>
      <div className={styles.banner__works}>
        <a href="#works" className={styles.banner__links}>
          <p>Consultez mon travail</p>   
          <FontAwesomeIcon icon={faArrowDownLong} style={{color: "#00224e",}} size='lg' className={styles.banner__icon}/>   
        </a>
      </div>
    </div>
  )
}

export default Banner