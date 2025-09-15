import Button from '../Button/Button'
import styles from './styles-card.module.css'


export default function Card({title, posterImg, text}){
    return (
        <div className={styles.container}>
            <img src={posterImg} alt="My Hero Academia Poster"/>
            <div>
                <h1>{title}</h1>
                <p>{text}</p>
                <Button />
            </div>
        </div>
    )
}