import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footer__icons}>
                    <a href="https://www.linkedin.com/in/gregoire-sandrock/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size='2x' />
                    </a>
                    <a href="https://github.com/GregoireSand" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} size='2x' />
                    </a>
                </div>
                <div className={styles.footer__text}>
                    <p>
                       © 2024 Grégoire Sandrock
                    </p>
                </div>
            </div>
        </>
    )
}
export default Footer