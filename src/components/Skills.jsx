import styles from "./skills.module.scss";
import SkillCard from "../components/SkillCard.jsx";
import icon1 from "../assets/server.png";
import icon2 from "../assets/planning.png";
import icon3 from "../assets/coding.png";


function Skills() {
  return (
    <div className={styles.skills__container}>
            <SkillCard 
                circlebc="#00224E"
                icon= {icon3}
                title="Développement web front-end"
                description="Développement d'applications web front-end, sites vitrines."
                subtitle="Langages et outils"
                tag1="Javascript"
                tag2="React"
                tag3="SASS"


                />
                <SkillCard 
                circlebc="#00224E"
                icon= {icon1}
                title="Développement web back-end"
                description="Développement de la logique métier et gestion de la base de données."
                subtitle="Langages et outils"
                tag1="NodeJS"
                tag2="Express"
                tag3="MongoDB"
                
                />
                <SkillCard 
                circlebc="#00224E"
                icon= {icon2}
                title="Gestion de projet"
                description="Coordination des activités d'une équipe pour garantir la réalisation des objectifs du projet."
                subtitle="Méthodes et outils"
                tag1="SCRUM"
                tag2="Méthodes Agiles"
                tag3="Kanban"
              />
    </div>

)}

export default Skills;
