import styles from './cardContainer.module.scss';
import CardList from './CardList'

function CardContainer(){
    return(
        <div className={styles.cardContainer}>
            <CardList />
        </div>
    )
}

export default CardContainer

