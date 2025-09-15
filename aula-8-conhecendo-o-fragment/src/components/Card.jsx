import styles from './styles-card.module.css'

export default function Card(){
    return (
        <div className={styles.container}>
            <img src="https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="My Hero Academia Poster"/>
            <div>
                <h1>My Hero Academia (2014)</h1>
                <p>Boku no Hero Academia é sobre um garoto sem poderes em um mundo onde quase todos os têm. Ele herda uma força extraordinária de seu maior ídolo e entra em uma academia de elite para aprender a lutar contra vilões e se tornar um verdadeiro herói.</p>
                <button>Assistir agora</button>
            </div>
        </div>
    )
}