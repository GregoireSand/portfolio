import * as React from 'react';
import {useState} from 'react';
import styles from './header.module.scss';
import logo from '../assets/logo.png';

function Header() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.nav__container}>
                    <div className={styles.nav__logoContainer}>
                        <a
                            href="#home">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div>
                        <ul className={styles.nav__links}>
                            <li>
                                <a
                                    href="#works"
                                    className={`${styles.nav__button} ${activeButton === 1 ? styles.active : ''}`}
                                    onClick={() => handleButtonClick(1)}>
                                    Réalisations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`${styles.nav__button} ${activeButton === 2 ? styles.active : ''}`}
                                    onClick={() => handleButtonClick(2)}>
                                    Compétences
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className={`${styles.nav__button} ${activeButton === 4 ? styles.active : ''}`}
                                    onClick={() => handleButtonClick(4)}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
