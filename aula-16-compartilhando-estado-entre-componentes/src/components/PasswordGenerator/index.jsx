import { useState } from "react"
import styles from "./styles.module.css"
import Input from "../Input"

export default function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
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
      <label htmlFor="passwordSize">Tamanho: </label>
      <Input 
        passwordSize={passwordSize}
        setPasswordSize={setPasswordSize}
      />
      <div className={styles.buttons}>
        <button onClick={generate}>Gerar senha de {passwordSize} caracteres</button>
        <button onClick={copyToClipboard}>{copyText}</button>
      <button onClick={() => setPasswordSize(99)}>Mudar estado</button>
      </div>
      <div className={styles.password}>Sua senha segura: {password}</div>
    </div>
  )
}
