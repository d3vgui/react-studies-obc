import styles from './Card.module.css'

export default function Card({imgProfile, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}){
    return (
        <div className={styles.container}>
            <div className={styles.imgContent}>
                <img src={imgProfile} alt={name} />
                <h2>{name}</h2>
            </div>
            <div className={styles.info}>
                <p>{bio}</p>
                <p className={styles.borders}>{phone}</p>
                <p>{email}</p>
            </div>
            <div className={styles.buttons}>
                <a href={githubUrl} target='_blank'>GitHub</a>
                <a href={linkedinUrl} target='_blank'>LinkedIn</a>
                <a href={twitterUrl} target='_blank'>Twitter</a>
            </div>
        </div>
    )
}