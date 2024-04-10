import styles from './skillcard.module.scss';


function SkillCard({circlebc, icon, title, description, subtitle, tag1, tag2, tag3}) {
  return (
    <div className={styles.skills__card}>
        <div className={styles.skills__iconBackground}  style={{ backgroundColor: circlebc }}>
        </div>
        <img src={icon} className={styles.skills__icon} />
        <p className={styles.skills__title}>
            {title}
        </p>
        <p className={styles.skills__description}>
            {description}
        </p>
        <p className={styles.skills__subtitle}>
            {subtitle}
        </p>
        <div className={styles.skills__tagsContainer}>
            <div className={styles.skills__tags}>
                {tag1}
            </div>
            <div className={styles.skills__tags}>
                {tag2}
            </div>
            <div className={styles.skills__tags}>
                {tag3}
            </div>
        </div>
            
    </div>
  )
}

export default SkillCard