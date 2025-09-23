import { useState } from "react"
import styles from "./styles.module.css"

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div>
      <h1 className={styles.title}>Gerador de senhas</h1>
      <div className={styles.buttons}>
        <button onClick={generate}>Gerar</button>
        <button onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div className={styles.password}>{password}</div>
    </div>
  )
}
