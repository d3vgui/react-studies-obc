import styles from './LinkButton.module.css'

export default function LinkButton({href, children}){
    return (
        <a 
            href={href} 
            target='_blank'
            className={styles.wrapper}
        >
            {children}
        </a>
    )
}