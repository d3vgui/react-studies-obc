import styles from './Title.module.css'

export default function Title({children}){
    return (
        <h2 className={styles.wrapper}>
            {children}
        </h2>

    )
}