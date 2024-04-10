import React from 'react';
import styles from '../components/section.module.scss';

function Section({ title, id, backgroundColor, children }) {
  //Use a ternary operator to determine if a background color is specified
  const sectionStyle = backgroundColor ? { backgroundColor: backgroundColor } : {};
  
  

  return (
    <div className={styles.section} id={id} style={sectionStyle}>
      <div className={styles.section__title}>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Section;
