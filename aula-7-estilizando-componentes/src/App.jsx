import Status from "./components/Status"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import './styles/global.css'
import styles from './App.module.css'

function sum(a, b){
  return a + b
}

export default function App(){
  const name = "Jesus"
  const status = true
  
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Status />
    </div>
  )
}